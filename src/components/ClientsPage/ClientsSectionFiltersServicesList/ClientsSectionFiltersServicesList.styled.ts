import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

export const Content = styled.div`
  padding-top: 1px;
`;

export const ListWrap = styled.div`
  border-radius: 8px;
  backdrop-filter: blur(8px);
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.spacing(4)}px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListItem = styled.li``;
