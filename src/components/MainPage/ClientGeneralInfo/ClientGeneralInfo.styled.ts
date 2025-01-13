import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(12)};
`;

export const ListItem = styled.li``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Number = styled.img`
  align-self: flex-start;
  height: 38px;
`;

export const Title = styled.p`
  width: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: lowercase;
`;
