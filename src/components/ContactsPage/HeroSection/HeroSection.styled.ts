import styled from '@emotion/styled';
import sectionBgDesk from '@/images/contacts/hero/section-bg-desk.jpg';
import sectionBgMob from '@/images/contacts/hero/section-bg-mob.jpg';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(22)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  background-color: ${({ theme }) => theme.colors.darkBg};
  background-image: url(${sectionBgMob});
  background-size: 100% auto;
  background-position: 0 0;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(26)}px;
    padding-bottom: ${({ theme }) => theme.spacing(24)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(25)}px;
  }
`;
