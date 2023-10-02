import React from 'react';
import { Base, Body, Face, LoadContainer } from './PageLoader.styled';

const PageLoader = () => {
  return (
    <LoadContainer>
      <Body>
        <span>
          <span />
          <span />
          <span />
          <span />
        </span>
        <Base>
          <span />
          <Face />
        </Base>
      </Body>
    </LoadContainer>
  );
};

export default PageLoader;
