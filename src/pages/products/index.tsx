import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/Card';
import { useQuery } from '@/hooks';
import ErrorProvider from '@/providers/ErrorProvider';
import LoadingProvider from '@/providers/LoadingProvider';
import { Grid, PageContainer } from '@/styles';
import { IProductCard } from '@/types/product';
import { useRouter } from 'next/router';

const Products = () => {
  const { query } = useRouter();
  const { data, isLoading, isError } = useQuery<IProductCard[]>(
    '/products',
    query,
  );
  const links = [
    {
      url: '/products',
      label: 'Products',
    },
  ];

  return (
    <section className="container">
      <LoadingProvider
        isLoading={isLoading}
        size={48}
      >
        <ErrorProvider isError={isError}>
          <PageContainer>
            <Breadcrumb links={links} />
            <Grid>
              {data?.map((product) => (
                <Card
                  product={product}
                  key={product._id}
                />
              ))}
            </Grid>
          </PageContainer>
        </ErrorProvider>
      </LoadingProvider>
    </section>
  );
};

export default Products;
