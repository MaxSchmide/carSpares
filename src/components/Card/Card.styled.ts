import { theme } from '@/styles';
import styled from 'styled-components';

export const Article = styled.article`
  grid-column: span 6;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 20px 20px 100px rgba(73, 73, 73, 0.15);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 240px;
  margin-bottom: 24px;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  height: 42px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
  color: ${theme.colors.primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${theme.colors.secondaryShade};
  }
`;

export const Price = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  &::before {
    content: '$';
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;
