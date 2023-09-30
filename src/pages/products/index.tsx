import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/Card';
import { Grid, PageContainer } from '@/styles';
import { useRouter } from 'next/router';

const Search = () => {
  const { query } = useRouter();
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
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </PageContainer>
    </section>
  );
};

export default Search;
