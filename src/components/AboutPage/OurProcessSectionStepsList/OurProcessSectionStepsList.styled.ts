import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(28)}px;
    padding-bottom: ${({ theme }) => theme.spacing(28)}px;
  }
`;

export const List = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ListItem = styled.li``;
