import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 3000px;
  background-color: ${({ theme }) => theme.colors.darkBg};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 5000px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(14)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(45)}px;
    padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  }
`;
