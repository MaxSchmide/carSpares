import { theme } from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Article = styled.article`
  padding: 2.4rem;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #fff;
  border-radius: 16px;
  user-select: none;
`;

export const Icon = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
`;

export const MyImage = styled(Image)`
  object-fit: cover;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Value = styled.p`
  font-size: 1.4rem;
`;

export const Price = styled.h3`
  font-size: 2rem;
  &::after {
    content: '$';
  }
`;
