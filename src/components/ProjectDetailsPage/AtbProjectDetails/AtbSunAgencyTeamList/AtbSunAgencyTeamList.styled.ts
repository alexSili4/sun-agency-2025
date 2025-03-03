import styled from '@emotion/styled';

export const List = styled.ul`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const ListItem = styled.li``;

export const DevelopersListItem = styled.li`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    grid-column: 3 / 4;
    grid-row: 1/3;
  }
`;

export const BottomListItem = styled.li`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    align-self: flex-end;
  }
`;
