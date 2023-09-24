import React from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import styled from 'styled-components';

const Icon = styled.span`
  display: flex;
  font-size: 32px;
  color: white;
`;

const CatalogIcon = () => {
  return (
    <Icon>
      <AiOutlineUnorderedList />
    </Icon>
  );
};

export default CatalogIcon;
