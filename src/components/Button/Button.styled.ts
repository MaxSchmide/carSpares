/* eslint-disable indent */
import { theme } from '@/styles';
import { ButtonProps } from '@/types/button';
import { getColorByProps } from '@/utils/getColorByProps';
import styled from 'styled-components';

export const MyButton = styled.button<ButtonProps>`
  background-color: ${(props) => getColorByProps(props)};
  color: ${(props) => (props.$variant ? 'white' : theme.colors.primary)};
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 500;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${(props) => {
      switch (props.$variant) {
        case 'primary':
          return theme.colors.tertiary;
        case 'secondary':
          return theme.colors.secondaryShade;
        default:
          return 'white';
      }
    }};
    box-shadow: 0 0 10px 2px ${(props) => getColorByProps(props)}7F;
  }
  &:active {
    transform: translateY(5%);
  }
`;