import { Breadcrumb } from '@/components/Breadcrumb';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product.model';
import { PageContainer } from '@/styles';
import { IProduct } from '@/types/product';
import { convertToJson } from '@/utils/convertToJson';
import { GetServerSideProps } from 'next';

type Props = {
  product: IProduct;
};

const ProductPage = ({ product }: Props) => {
  const links = [
    {
      url: '/products',
      label: 'Products',
    },
    {
      label: product?.title || '',
      url: '/products/' + product?._id || '',
    },
  ];

  return (
    <section className="container">
      <PageContainer>
        <Breadcrumb links={links} />
        <h4>{product?.description}</h4>
      </PageContainer>
    </section>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  if (id === 'favicon.svg' || id === 'manifest.json') {
    return {
      props: {},
    };
  }

  await mongooseConnect();

  const product = await Product.findById(id).populate('category');

  return {
    props: {
      product: convertToJson(product),
    },
  };
};
