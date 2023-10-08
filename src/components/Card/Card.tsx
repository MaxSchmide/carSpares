import React from 'react';
import {
  Article,
  Flex,
  Icon,
  ImageContainer,
  MyImage,
  P,
  Price,
  Title,
} from './Card.styled';
import { Button } from '../Button';
import Link from 'next/link';
import { FavouriteIcon } from '@/styles/Icons';
import { IProductCard } from '@/types/product';
import {
  addProductToCart,
  toggleFavouriteItem,
  useAppDispatch,
  useAppSelector,
} from '@/redux';

type Props = {
  product: IProductCard;
};

export const Card = ({ product }: Props) => {
  const { items } = useAppSelector((state) => state.favourites);
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const isFavourite = items.some((item) => item._id === product._id);
  const isAdded = cartItems.some((item) => item._id === product._id);

  const handleToggleFavourite = () => {
    dispatch(toggleFavouriteItem(product));
  };

  const handleAddToCart = () => {
    if (isAdded) {
      alert('already in cart!');
      return;
    }
    const payload = {
      _id: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: 1,
    };

    dispatch(addProductToCart(payload));
  };

  return (
    <Article>
      <ImageContainer>
        <MyImage
          fill
          sizes="100%"
          src={product.image}
          alt={product.title}
          priority
        />
        <Icon onClick={handleToggleFavourite}>
          <FavouriteIcon $active={isFavourite} />
        </Icon>
      </ImageContainer>
      <P>{product.article}</P>
      <Link href={'/products/' + product._id}>
        <Title>{product.title}</Title>
      </Link>
      <Flex>
        <Price>{Math.round(product.price)}</Price>
        <Button
          $variant={isAdded ? 'primary' : 'secondary'}
          onClick={handleAddToCart}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </Button>
      </Flex>
    </Article>
  );
};
