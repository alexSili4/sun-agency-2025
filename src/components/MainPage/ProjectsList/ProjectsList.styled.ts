import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: ${({ theme }) => theme.spacing(41)};
  grid-row-gap: ${({ theme }) => theme.spacing(12)};
  justify-content: end;
`;

export const ListItem = styled.li`
  &:nth-of-type(odd) {
    margin-top: ${({ theme }) => theme.spacing(100)};
  }
`;
