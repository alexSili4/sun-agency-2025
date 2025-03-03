import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(35)}px;
    padding-bottom: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const BannersWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const BannerWrap = styled.div`
  border-radius: 29px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-radius: 40px;
  }
`;
