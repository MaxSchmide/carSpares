import React from 'react';
import {
  Article,
  Flex,
  Icon,
  ImageContainer,
  MyImage,
  Price,
  Title,
} from './Card.styled';
import { Button } from '../Button';
import Link from 'next/link';
import { FavouriteIcon } from '@/styles/Icons';
import { IProductCard } from '@/types/product';

type Props = {
  product: IProductCard;
};

export const Card = ({ product }: Props) => {
  return (
    <Article>
      <ImageContainer>
        <MyImage
          fill
          src={product.image}
          alt=""
        />
        <Icon>
          <FavouriteIcon />
        </Icon>
      </ImageContainer>
      <Link href={'/products/' + product._id}>
        <Title>{product.title}</Title>
      </Link>
      <Flex>
        <Price>{product.price}</Price>
        <Button variant="secondary">Add to Cart</Button>
      </Flex>
    </Article>
  );
};
