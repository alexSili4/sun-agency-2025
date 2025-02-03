import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;
`;

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-row-gap: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    grid-template-columns: repeat(2, auto);
    grid-column-gap: ${({ theme }) => theme.spacing(41)}px;
    grid-row-gap: ${({ theme }) => theme.spacing(12)}px;
    justify-content: start;
    direction: rtl;
  }
`;

export const ListItem = styled.li`
  &:nth-of-type(even) {
    margin-top: ${({ theme }) => theme.spacing(100)}px;
  }
`;
