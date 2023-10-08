import { Grid, PageContainer } from '@/styles';
import React from 'react';
import { Empty, Order, Products } from '@/styles/CartPage';
import { useAppSelector } from '@/redux';
import CartItem from '@/components/CartItem/CartItem';
import { countTotalSum } from '@/utils/helpers';

const Cart = () => {
  const { items } = useAppSelector((state) => state.cart);
  return (
    <section className="container">
      <PageContainer>
        <Grid>
          <Products>
            {items.length > 0 ? (
              items.map((item) => (
                <CartItem
                  key={item._id}
                  product={item}
                />
              ))
            ) : (
              <Empty>Your cart is empty!</Empty>
            )}
          </Products>
          <Order>Total sum: {countTotalSum(items)}</Order>
        </Grid>
      </PageContainer>
    </section>
  );
};

export default Cart;
