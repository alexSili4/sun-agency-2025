import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.darkBg};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;
