import React from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import styled from 'styled-components';

const Icon = styled.span`
  display: flex;
  font-size: 2.4rem;
  color: white;
`;

export const CatalogIcon = () => {
  return (
    <Icon>
      <AiOutlineUnorderedList />
    </Icon>
  );
};
