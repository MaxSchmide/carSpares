import { PageContainer } from '@/styles';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <section className="container">
      <PageContainer>CategoryPage #{id}</PageContainer>
    </section>
  );
};

export default CategoryPage;
