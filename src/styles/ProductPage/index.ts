import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '@/styles/Theme';
import { device } from '@/styles/BreakPoints';

type ImageProps = {
  $selected: boolean;
};

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 4rem;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  text-align: center;
  border-bottom: 1px solid ${theme.colors.inputBorder};

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;

  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 8rem;
  margin-bottom: 4rem;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const ImageContainer = styled.div<ImageProps>`
  position: relative;
  height: 10rem;
  width: 10rem;
  cursor: pointer;
  border: ${(props) =>
    props.$selected
      ? `2px solid ${theme.colors.secondary}`
      : `1px solid ${theme.colors.inputBorder}`};

  @media (max-width: 768px) {
    height: 7rem;
    width: 7rem;
  }
  @media ${device.mobile} {
    width: 5rem;
    height: 5rem;
  }
`;

export const Images = styled.aside`
  display: flex;
  gap: 4rem;

  @media ${device.mobile} {
    flex-direction: column-reverse;
  }
`;

export const Small = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 40rem;
  overflow: hidden;
  @media ${device.mobile} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Big = styled.div`
  position: relative;
  height: 40rem;
  width: 40rem;
  background-color: white;
  @media (max-width: 768px) {
    height: 32rem;
    width: 32rem;
  }

  @media ${device.mobile} {
    height: 20rem;
    width: 20rem;
    margin: 0 auto;
  }
`;

export const SmallImage = styled(Image)`
  object-fit: cover;
`;

export const BigImage = styled(Image)`
  object-fit: contain;
`;

export const Details = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Price = styled.h4`
  font-size: 2rem;
  &::after {
    content: '$';
  }

  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Property = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  gap: 1rem;
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Icon = styled.span`
  display: inline-block;
`;

export const Article = styled.p`
  font-size: 1.5rem;
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const Info = styled.article`
  margin-bottom: 1rem;
`;
