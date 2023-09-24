import { theme } from '@/styles';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 12px 24px;
  max-height: 96px;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  background-color: ${theme.colors.inputBg};
  color: white;
  padding: 8px 48px 8px 16px;
  border: 1px solid ${theme.colors.inputBorder};
  border-radius: 9999px;
  width: 300px;
  outline: 1px solid transparent;
  transition: outline 0.2s ease-in;
  &:focus {
    outline: 4px solid ${theme.colors.secondary};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.div`
  display: flex;
  gap: 24px;
`;
