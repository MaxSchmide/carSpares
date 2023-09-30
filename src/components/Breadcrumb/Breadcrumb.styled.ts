import { theme } from '@/styles';
import styled from 'styled-components';

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  a {
    color: ${theme.colors.primary};
    transition: color 0.2s ease-in-out;
    font-size: 18px;
    &:hover {
      color: ${theme.colors.secondary};
    }
    &:last-child {
      pointer-events: none;
    }
  }
`;
