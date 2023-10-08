import { IProductCart } from '@/types/product';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Article,
  Box,
  Count,
  Icon,
  ImageContainer,
  MyImage,
  Price,
  Title,
  Value,
} from './CartItem.styled';
import { MinusIcon, PlusIcon } from '@/styles/Icons';
import {
  decreaseCount,
  increaseCount,
  removeProductFromCart,
  useAppDispatch,
} from '@/redux';

type Props = {
  product: IProductCart;
};

const CartItem = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleDeleteFromCart = () => {
    dispatch(removeProductFromCart(product._id));
  };

  const handleIncreaseCount = () => {
    dispatch(increaseCount(product._id));
  };
  const handleDecreaseCount = () => {
    dispatch(decreaseCount(product._id));
  };
  return (
    <Article>
      <Icon onClick={handleDeleteFromCart}>
        <AiOutlineClose />
      </Icon>
      <ImageContainer>
        <MyImage
          fill
          src={product.image}
          alt={product.title}
        />
      </ImageContainer>
      <Box>
        <Title>{product.title}</Title>
        <Count>
          <MinusIcon
            $disable={product.count === 1}
            $size={1.5}
            onClick={handleDecreaseCount}
          />
          <Value>{product.count}</Value>
          <PlusIcon
            $disable={product.count === 999}
            $size={1.5}
            onClick={handleIncreaseCount}
          />
        </Count>
      </Box>
      <Price>{Math.round(product.price)}</Price>
    </Article>
  );
};

export default CartItem;
