import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { theme } from '../Theme';
import { device } from '../BreakPoints';

type Props = {
  $active?: boolean;
};

const Icon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.6rem;
  font-size: 2rem;
  background-color: #eee;
  color: #bbb;
  cursor: pointer;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  ${(props) => {
    if (props.$active) {
      return `
        background-color: ${theme.colors.secondaryShade}3f;
        color: ${theme.colors.secondary};
      `;
    }
  }}
  &:hover {
    background-color: ${theme.colors.secondaryShade}3f;
    color: ${theme.colors.secondary};
  }

  @media ${device.tablet} {
    font-size: 2.4rem;
  }

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const FavouriteIcon = ({ $active }: Props) => {
  return (
    <Icon $active={$active}>
      {$active ? <AiFillHeart /> : <AiOutlineHeart />}
    </Icon>
  );
};
