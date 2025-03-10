import styled from '@emotion/styled';
import sectionBgMob from '@/images/about/hero/section-bg-mob.png';
import sectionBgDesk from '@/images/about/hero/section-bg-desk.png';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Background = styled.section`
  padding-top: ${({ theme }) => theme.spacing(22)}px;
  padding-bottom: ${({ theme }) => theme.spacing(16)}px;
  background-image: url(${sectionBgMob});
  background-position: bottom 0 left 0;
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 0 0 32px 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(25)}px;
    padding-bottom: ${({ theme }) => theme.spacing(69)}px;
    background-image: url(${sectionBgDesk});
    border-radius: 0 0 120px 120px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;
`;

export const Content = styled.div``;
