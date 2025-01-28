import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`;

export const Content = styled.div`
  width: 668px;
`;
