import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import { theme } from '../Theme';

const Icon = styled.span`
  display: flex;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  color: white;

  &:hover {
    color: ${theme.colors.secondary};
    transform: scale(1.02);
  }
`;

const SearchIcon = () => {
  return (
    <Icon>
      <AiOutlineSearch />
    </Icon>
  );
};

export default SearchIcon;
