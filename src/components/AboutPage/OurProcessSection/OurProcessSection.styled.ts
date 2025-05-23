import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.ourProcessSection};
  padding-top: ${({ theme }) => theme.spacing(29)}px;
  padding-bottom: ${({ theme }) => theme.spacing(14)}px;
  background-color: ${({ theme }) => theme.colors.dark};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(46)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;
