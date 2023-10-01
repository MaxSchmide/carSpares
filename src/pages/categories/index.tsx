import { Category } from '@/models/category.model';
import { useGetCategoriesQuery } from '@/redux';
import { Grid, PageContainer } from '@/styles';
import { convertToJson } from '@/utils/convertToJson';
import React from 'react';

const CategoriesPage = ({ categories }: any) => {
  const { data } = useGetCategoriesQuery();
  return (
    <section className="container">
      <PageContainer>
        <Grid>
          {data?.map((category) => (
            <p
              key={category._id}
              style={{ gridColumn: 'span 6' }}
            >
              {category.label}
            </p>
          ))}
        </Grid>
      </PageContainer>
    </section>
  );
};

export default CategoriesPage;

export const getServerSideProps = async () => {
  const categories = convertToJson(await Category.find());
  return {
    props: {
      categories,
    },
  };
};
