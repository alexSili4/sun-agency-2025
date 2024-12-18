import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;
