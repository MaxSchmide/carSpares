import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { theme } from '../Theme';

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 8px;
  background-color: #eee;
  color: #bbb;
  cursor: pointer;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.colors.secondaryShade}3f;
    color: ${theme.colors.secondary};
  }
`;

export const FavouriteIcon = () => {
  return (
    <Icon>
      <AiFillHeart />
    </Icon>
  );
};
