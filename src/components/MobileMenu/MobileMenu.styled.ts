import { device, theme } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  $show: boolean;
};

export const Container = styled.div<Props>`
  display: none;
  position: fixed;
  inset: 0;
  top: 6rem;
  z-index: 100;
  background-color: white;
  transform: ${(props) => (props.$show ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transition:
    transform 0.2s 0.1s ease-in,
    opacity 0.2s 0.1s ease-in;
  @media ${device.mobile} {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  background-color: ${theme.colors.inputBg};
  padding: 1rem;
  padding-right: 4rem;
  color: white;
  width: 100%;
  border: 2px solid ${theme.colors.inputBorder};
  border-radius: 9999px;
  font-size: 1rem;
  outline: 1px solid transparent;
  transition: outline 0.2s ease-in;
  &:focus {
    outline: 4px solid ${theme.colors.secondary};
  }
`;

export const Label = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

export const Links = styled.div`
  border-top: 1px solid ${theme.colors.inputBorder};
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
