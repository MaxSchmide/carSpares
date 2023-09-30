import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/Card';
import { useAppSelector } from '@/redux';
import { Grid, PageContainer } from '@/styles';
import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
  grid-column: 1/-1;
  font-size: 24px;
  font-weight: 500;
`;

const Favourites = () => {
  const { items } = useAppSelector((state) => state.favourites);
  const links = [
    {
      url: '/favourites',
      label: 'Favourites',
    },
  ];
  return (
    <section className="container">
      <PageContainer>
        <Breadcrumb links={links} />
        <Grid>
          {items.length > 0 ? (
            items.map((item) => (
              <Card
                product={item}
                key={item._id}
              />
            ))
          ) : (
            <Message>No items in favourites</Message>
          )}
        </Grid>
      </PageContainer>
    </section>
  );
};

export default Favourites;
