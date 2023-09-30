import React from 'react';
import { ButtonProps } from '@/types/button';
import { MyButton } from './Button.styled';

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <MyButton
      variant={variant}
      {...rest}
    >
      {children}
    </MyButton>
  );
};
