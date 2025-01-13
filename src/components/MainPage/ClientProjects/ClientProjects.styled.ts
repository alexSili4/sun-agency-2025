import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ListItem = styled.li``;

export const Container = styled.div`
  width: 186px;
  height: 104px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
`;
