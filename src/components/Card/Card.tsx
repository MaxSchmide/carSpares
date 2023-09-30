import React from 'react';
import {
  Article,
  Flex,
  Icon,
  ImageContainer,
  Price,
  Title,
} from './Card.styled';
import Image from 'next/image';
import { Button } from '../Button';
import Link from 'next/link';
import { FavouriteIcon } from '@/styles/Icons';

export const Card = () => {
  return (
    <Article>
      <ImageContainer>
        <Image
          fill
          src="https://car-spares.s3.eu-north-1.amazonaws.com/1684388949865.jpg"
          alt=""
        />
        <Icon>
          <FavouriteIcon />
        </Icon>
      </ImageContainer>
      <Link href={'/products/' + '1'}>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          perspiciatis porro maxime nam ducimus impedit voluptatem
          exercitationem, voluptas explicabo commodi quam quod autem ullam.
          Provident consequatur minus amet tempore.
        </Title>
      </Link>
      <Flex>
        <Price>799</Price>
        <Button variant="secondary">Add to Cart</Button>
      </Flex>
    </Article>
  );
};
