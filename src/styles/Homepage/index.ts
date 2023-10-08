import { device, theme } from '@/styles';
import styled from 'styled-components';

export const H1 = styled.h1`
  display: block;
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2.4rem;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 44%,
    ${theme.colors.secondaryShade} 77%,
    ${theme.colors.tertiary} 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s reverse infinite;

  @media ${device.mobile} {
    font-size: 2rem;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

export const SlideContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  img {
    filter: brightness(0.2);
    object-fit: cover;
    object-position: center;
  }
`;

export const H3 = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 4rem;
  transform: translate(-50%, -50%);
  a {
    transition: color 0.2s ease-in-out;
    color: white;
    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const SwiperContainer = styled.article`
  width: 80%;
  height: 60rem;
  margin: 0 auto;
  margin-bottom: 24px;

  @media ${device.tablet} {
    height: 40rem;
  }
  @media ${device.mobile} {
    height: 20rem;
    width: 100%;
  }

  .swiper {
    height: 100%;
  }
`;
