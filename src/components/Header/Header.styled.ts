import { device, theme } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';

export const Top = styled.div`
  padding: 1.2rem 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 9.6rem;
  background-color: ${theme.colors.primary};

  @media ${device.tablet} {
    padding: 1rem 1rem;
  }
`;

export const Bottom = styled.div`
  position: relative;
  padding-right: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const CatalogButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1.2rem 2.4rem;
  color: white;
  font-size: 2.4rem;
  cursor: pointer;
  background-color: ${theme.colors.secondary};
  transition: background-color 0.2s ease-in-out;
  user-select: none;
  &:hover {
    background-color: ${theme.colors.secondaryShade};
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: 16px;

  a {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    font-weight: 500;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`;

export const Form = styled.form`
  position: relative;
  z-index: 10;
  @media ${device.tablet} {
    width: 60%;
  }
`;

export const Input = styled.input`
  background-color: ${theme.colors.inputBg};
  color: white;
  padding: 0.8rem 172px 0.8rem 1.6rem;
  border: 2px solid ${theme.colors.inputBorder};
  border-radius: 9999px;
  width: 50rem;
  font-size: 1.6rem;
  outline: 1px solid transparent;
  transition: outline 0.2s ease-in;
  &:focus {
    outline: 4px solid ${theme.colors.secondary};
  }

  @media ${device.tablet} {
    width: 100%;
    font-size: 2rem;
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

export const Buttons = styled.div`
  display: flex;
  gap: 2.4rem;
  @media ${device.tablet} {
    gap: 1rem;
  }
`;

export const MyLink = styled(Link)`
  position: relative;
  height: 9.6rem;
  width: 11rem;
  @media ${device.tablet} {
    width: 9rem;
    height: 7.6rem;
  }
`;
