import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(35)}px;
  padding-bottom: ${({ theme }) => theme.spacing(16)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)};
`;

export const BannersWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const Image = styled.img``;

export const BannerWrap = styled.div`
  border-radius: 40px;
  overflow: hidden;
`;
