import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  left: 50%;
  width: 555px;
  height: 251px;
  transform: translateX(calc(-50% + 8px));

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 1531px;
    height: 693px;
    transform: translateX(calc(-50% + 22.5px));
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
