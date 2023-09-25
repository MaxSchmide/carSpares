import { theme } from '@/styles';
import { SpinnerProps } from '@/types/spinner';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div<SpinnerProps>`
  border: ${(props) => props.size * 0.125}px solid
    ${theme.colors.secondaryShade}7f;
  border-top: ${(props) => props.size * 0.125}px ${theme.colors.secondary} solid;
  border-radius: 50%;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
