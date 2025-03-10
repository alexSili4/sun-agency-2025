import styled from '@emotion/styled';
import reviewBgMob from '@/images/main/reviews/review-bg-mob.png';
import reviewBgDesk from '@/images/main/reviews/review-bg-desk.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(8)}px;
  height: 100%;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(17)}px ${spacing(4)}px ${spacing(12)}px`};
  background-image: url(${reviewBgMob});
  background-position: 0 0;
  background-size: 100% 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(18)}px ${spacing(8)}px ${spacing(5)}px`};
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
    font-size: 16px;
  }
`;

export const ClientInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const Avatar = styled.img`
  width: 48px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 62px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;
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

export const DecorativeIcon = styled.img`
  width: 103px;
  height: 86px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;
