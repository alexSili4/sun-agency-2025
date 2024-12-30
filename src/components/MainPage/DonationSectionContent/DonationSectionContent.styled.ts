import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScrollBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`;
