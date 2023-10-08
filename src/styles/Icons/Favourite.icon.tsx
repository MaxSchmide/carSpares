import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { theme } from '../Theme';
import { device } from '../BreakPoints';

type Props = {
  $active?: boolean;
  $size?: number;
};

const Icon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: ${(props) => props.$size! / 4 + 'rem'};
  font-size: ${(props) => props.$size + 'rem'};
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

  @media ${device.mobile} {
    font-size: ${(props) => props.$size! / 2 + 'rem'};
  }
`;

export const FavouriteIcon = ({ $active, $size = 2 }: Props) => {
  return (
    <Icon
      $active={$active}
      $size={$size}
    >
      {$active ? <AiFillHeart /> : <AiOutlineHeart />}
    </Icon>
  );
};
