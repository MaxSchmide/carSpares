import { theme } from '@/styles';
import styled from 'styled-components';

export const Top = styled.div`
  padding: 12px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 96px;
  background-color: ${theme.colors.primary};
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
  padding: 12px 24px;
  color: white;
  font-size: 24px;
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
    font-size: 18px;
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
`;

export const Input = styled.input`
  background-color: ${theme.colors.inputBg};
  color: white;
  padding: 8px 170px 8px 16px;
  border: 2px solid ${theme.colors.inputBorder};
  border-radius: 9999px;
  width: 500px;
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

export const Select = styled.select`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 52px;
  background: ${theme.colors.inputBg};
  border: none;
  border-left: 2px solid ${theme.colors.inputBorder};
  border-right: 2px solid ${theme.colors.inputBorder};
  outline: none;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

export const Option = styled.option`
  padding: 6px 10px;
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;