import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(26)}px;
    padding-bottom: ${({ theme }) => theme.spacing(45)}px;
  }
`;

export const Container = styled.div``;
