import styled from '@emotion/styled';
import reviewBgMob from '@/images/projects/review-bg-mob.png';
import reviewBgDesk from '@/images/projects/review-bg-desk.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 335px;
  aspect-ratio: 335 / 410;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(19)}px ${spacing(4)}px ${spacing(10)}px`};
  background-image: url(${reviewBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 1012px;
    aspect-ratio: 1012 / 402;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(24)}px ${spacing(31)}px ${spacing(14)}px`};
    background-image: url(${reviewBgDesk});
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const Image = styled.img`
  width: 48px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;

export const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
  }
`;

export const JobTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
  }
`;
