import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const ListItem = styled.li``;

export const DevelopersListItem = styled.li`
  grid-column: 3 / 4;
  grid-row: 1/3;
`;

export const BottomListItem = styled.li`
  align-self: flex-end;
`;
