import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  background-color: ${({ theme }) => theme.colors.dark};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(57)}px;
    padding-bottom: ${({ theme }) => theme.spacing(47)}px;
  }
`;
