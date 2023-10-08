import styled from 'styled-components';
import { device } from './BreakPoints';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), minmax(0, 1fr));
  gap: 24px;

  @media ${device.mobile} {
    gap: 16px;
  }
`;
