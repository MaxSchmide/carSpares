import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/category.model';
import { Grid, PageContainer } from '@/styles';
import { ICategory } from '@/types/category';
import { convertToJson } from '@/utils/convertToJson';
import Link from 'next/link';
import React from 'react';

type Props = {
  categories: ICategory[];
};

const CategoriesPage = ({ categories }: Props) => {
  return (
    <section className="container">
      <PageContainer>
        <Grid>
          {categories.map((category) => (
            <Link
              href={'/categories/' + category._id}
              key={category._id}
              style={{ gridColumn: 'span 6' }}
            >
              {category.label}
            </Link>
          ))}
        </Grid>
      </PageContainer>
    </section>
  );
};

export default CategoriesPage;

export const getServerSideProps = async () => {
  await mongooseConnect();
  const categories = convertToJson(await Category.find().exec());
  return {
    props: {
      categories,
    },
  };
};
