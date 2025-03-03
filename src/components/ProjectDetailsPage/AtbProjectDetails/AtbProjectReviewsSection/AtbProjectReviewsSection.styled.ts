import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  background-color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(35)}px;
    padding-bottom: ${({ theme }) => theme.spacing(11)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
