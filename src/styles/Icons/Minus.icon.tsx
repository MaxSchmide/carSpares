import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import styled from 'styled-components';
import { theme } from '../Theme';

type Props = {
  $disable?: boolean;
  $size?: number;
  onClick?: () => void;
};

const Icon = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid
    ${(props) => (props.$disable ? '#ddd' : `${theme.colors.primary}`)};
  padding: ${(props) => props.$size! / 4 + 'rem'};
  font-size: ${(props) => props.$size + 'rem'};
  background-color: #eee;
  color: ${(props) => (props.$disable ? '#ddd' : `${theme.colors.primary}`)};
  pointer-events: ${(props) => (props.$disable ? 'none' : 'all')};
  cursor: pointer;
  transition:
    color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.secondary};
    border-color: ${theme.colors.secondary};
  }
`;

export const MinusIcon = ({ $disable, $size = 2, onClick }: Props) => {
  return (
    <Icon
      $disable={$disable}
      $size={$size}
      onClick={onClick}
    >
      <AiOutlineMinus />
    </Icon>
  );
};
