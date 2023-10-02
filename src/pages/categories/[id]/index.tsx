import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/Card';
import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/category.model';
import { Product } from '@/models/product.model';
import { Grid, PageContainer } from '@/styles';
import { ILink } from '@/types/link';
import { IProductCard } from '@/types/product';
import { convertToJson } from '@/utils/convertToJson';
import { getDescendantCategories } from '@/utils/getDescendantCategories';
import { GetServerSideProps } from 'next';

type Props = {
  products: IProductCard[];
  categoryName: string;
};

const CategoryPage = ({ products, categoryName }: Props) => {
  const links: ILink[] = [
    {
      url: '/categories',
      label: 'Categories',
    },
    {
      url: '/',
      label: categoryName,
    },
  ];
  return (
    <section className="container">
      <PageContainer>
        <Breadcrumb links={links} />
        <Grid>
          {products?.map((product) => (
            <Card
              key={product._id}
              product={product}
            />
          ))}
        </Grid>
      </PageContainer>
    </section>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await mongooseConnect();
  const { id } = ctx.query;

  if (id === 'favicon.svg' || id === 'manifest.json') {
    return {
      props: {},
    };
  }

  const category = await Category.findById({ _id: id }, 'label');

  const descendantsCategories = await getDescendantCategories(category?._id);

  const result = await Product.find(
    {
      category: { $in: descendantsCategories },
    },
    'title article images price',
  );
  const products = convertToJson(
    result.map((pr) => ({
      _id: pr._id,
      title: pr.title,
      image: pr.images[0],
      price: pr.price,
      article: pr.article,
    })),
  );

  return {
    props: { products, categoryName: category?.label },
  };
};
