import { theme } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: #eee;
  top: 56px;
  left: 0px;
  width: 200px;
  border: 1px solid ${theme.colors.secondaryShade};
`;

export const Ul = styled.ul`
  position: relative;
`;

export const ListItem = styled.li`
  padding: 6px 10px;
  position: relative;
  color: ${theme.colors.primary};
  user-select: none;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.secondary};
    background-color: #ddd;
  }

  &:hover .submenu {
    display: block;
  }

  &:hover .menu-icon {
    transform: translateX(5px);
  }
`;

export const Submenu = styled.div`
  display: none;
  position: absolute;
  top: -1px;
  right: -200px;
  width: 200px;
  background-color: #eee;
  border: 1px solid ${theme.colors.secondaryShade};
`;
