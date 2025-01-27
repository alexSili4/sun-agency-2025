import styled from '@emotion/styled';
import reviewBg from '@/images/reviews/review-bg.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(10)}px;
  height: 100%;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(18)}px ${spacing(8)}px ${spacing(5)}px`};
  background-image: url(${reviewBg});
  background-position: 0 0;
  background-size: 100% 100%;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
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
  width: 62px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
`;

export const JobTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const DecorativeIcon = styled.img`
  width: 103px;
  height: 86px;
`;
