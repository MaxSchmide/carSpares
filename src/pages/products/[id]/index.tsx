import { useRouter } from 'next/router';

const ProductPage = () => {
  const { query } = useRouter();
  // eslint-disable-next-line no-console
  console.log(query);
  return <div className="container">index</div>;
};

export default ProductPage;
