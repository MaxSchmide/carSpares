import React from 'react';
import { ButtonProps } from '@/types/button';
import { MyButton } from './Button.styled';

export const Button = ({
  $variant,
  $size = 10,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <MyButton
      $variant={$variant}
      $size={$size}
      {...rest}
    >
      {children}
    </MyButton>
  );
};
