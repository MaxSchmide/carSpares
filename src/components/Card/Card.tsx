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
import { toggleFavouriteItem, useAppDispatch, useAppSelector } from '@/redux';

type Props = {
  product: IProductCard;
};

export const Card = ({ product }: Props) => {
  const { items } = useAppSelector((state) => state.favourites);
  const dispatch = useAppDispatch();
  const handleToggleFavourite = (product: IProductCard) => {
    dispatch(toggleFavouriteItem(product));
  };
  const isFavourite = items.some((item) => item._id === product._id);

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
        <Icon onClick={() => handleToggleFavourite(product)}>
          <FavouriteIcon $active={isFavourite} />
        </Icon>
      </ImageContainer>
      <P>{product.article}</P>
      <Link href={'/products/' + product._id}>
        <Title>{product.title}</Title>
      </Link>
      <Flex>
        <Price>{product.price}</Price>
        <Button $variant="secondary">Add to Cart</Button>
      </Flex>
    </Article>
  );
};
