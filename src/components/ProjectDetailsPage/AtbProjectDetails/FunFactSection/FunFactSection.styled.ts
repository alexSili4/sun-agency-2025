import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(25)}px;
    padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const Container = styled.div`
  padding: 1px;
  border-radius: 20px;
  background-image: conic-gradient(
    from 80deg,
    #161616,
    #ffffff,
    #161616,
    #ffffff,
    #161616
  );
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  padding: ${({ theme: { spacing } }) => `${spacing(8)}px ${spacing(5)}px`};
  border-radius: inherit;
  background-color: #161616;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme: { spacing } }) => `${spacing(6)}px ${spacing(20)}px`};
    padding-left: ${({ theme }) => theme.spacing(4)}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const Image = styled.img`
  width: 82px;
  height: 68px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 107px;
    height: 90px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 40.8vw;
    max-width: 588px;
    font-size: 20px;
    line-height: 1.1;
  }
`;
