import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(132)}px;
`;
