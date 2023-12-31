import { device, theme } from '@/styles';
import styled from 'styled-components';
import Image from 'next/image';

export const Article = styled.article`
  grid-column: span 6;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 20px 20px 100px rgba(73, 73, 73, 0.15);
  }

  @media ${device.mobile} {
    grid-column: 1/-1;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 24rem;
  margin-bottom: 24px;

  @media ${device.mobile} {
    height: 12rem;
  }
`;

export const MyImage = styled(Image)`
  object-fit: contain;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
  height: 4rem;
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

  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

export const Price = styled.p`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  &::before {
    content: '$';
  }

  @media ${device.mobile} {
    font-size: 2rem;
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

export const P = styled.p`
  margin-bottom: 8px;
  font-size: 1.2rem;

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;
