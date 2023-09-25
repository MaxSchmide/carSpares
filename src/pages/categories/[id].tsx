import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage = () => {
  const {
    query: { id },
  } = useRouter();
  return <div>CategoryPage #{id}</div>;
};

export default CategoryPage;
