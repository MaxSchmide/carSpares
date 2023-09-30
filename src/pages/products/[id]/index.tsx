import { Breadcrumb } from '@/components/Breadcrumb';
import { useQuery } from '@/hooks';
import ErrorProvider from '@/providers/ErrorProvider';
import LoadingProvider from '@/providers/LoadingProvider';
import { PageContainer } from '@/styles';
import { IProduct } from '@/types/product';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const ProductPage = () => {
  const { query } = useRouter();
  const { data, isLoading, isError } = useQuery<IProduct>(
    '/products?id=' + query.id,
  );

  const links = useMemo(
    () => [
      {
        url: '/products',
        label: 'Products',
      },
      {
        label: data?.title || '',
        url: '/products/' + data?._id || '',
      },
    ],
    [data],
  );
  return (
    <section className="container">
      <PageContainer>
        <LoadingProvider
          isLoading={isLoading}
          size={48}
        >
          <ErrorProvider isError={isError}>
            <Breadcrumb links={links} />
            <h4>{data?.description}</h4>
          </ErrorProvider>
        </LoadingProvider>
      </PageContainer>
    </section>
  );
};

export default ProductPage;
