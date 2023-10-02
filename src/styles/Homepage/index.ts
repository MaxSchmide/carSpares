import { theme } from '@/styles';
import styled from 'styled-components';

export const H1 = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-bottom: 24px;
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
  display: inline-block;

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
  transform: translate(-50%, -50%);
  a {
    transition: color 0.2s ease-in-out;
    color: white;
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`;

export const SwiperContainer = styled.article`
  width: 80%;
  height: 600px;
  margin: 0 auto;
  margin-bottom: 24px;

  .swiper {
    height: 100%;
  }
`;
