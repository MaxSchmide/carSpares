import React from 'react';
import { MyButton } from './Button.styled';
import { ButtonProps } from '@/types/button';

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
