import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/Card';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product.model';
import { Grid, PageContainer } from '@/styles';
import { IProductCard } from '@/types/product';
import { convertToJson } from '@/utils/convertToJson';
import { GetServerSideProps } from 'next';

type Props = {
  products: IProductCard[];
};

const Products = ({ products }: Props) => {
  const links = [
    {
      url: '/products',
      label: 'Products',
    },
  ];

  return (
    <section className="container">
      <PageContainer>
        <Breadcrumb links={links} />
        <Grid>
          {products?.map((product) => (
            <Card
              product={product}
              key={product._id}
            />
          ))}
        </Grid>
      </PageContainer>
    </section>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;

  await mongooseConnect();

  const searchBy = String(query.searchBy);
  const search = query.query || '';

  const searchOptions: {
    [key: string]: { $regex: string | string[]; $options: string };
  } = {};

  switch (searchBy) {
    case 'article':
      searchOptions.article = { $regex: search, $options: 'i' };
      break;
    default:
      searchOptions.title = { $regex: search, $options: 'i' };
      break;
  }

  const all = await Product.find(searchOptions).lean();

  const products = all.map((pr) => ({
    _id: pr._id,
    title: pr.title,
    price: pr.price,
    article: pr.article,
    image: pr.images[0],
  }));
  return {
    props: { products: convertToJson(products) },
  };
};
