import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  top: 4px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

export const ListItem = styled.li``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;
`;

export const Marker = styled.div`
  width: 4px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Tag = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;
