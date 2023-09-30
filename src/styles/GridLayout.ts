import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, minmax(0, 1fr));
  gap: 24px;
`;
