import styled from '@emotion/styled';
import { IStyledBackgroundProps } from './AtbHeroSection.types';

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: flex;
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const Background = styled.div<IStyledBackgroundProps>`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(24)}px;
  padding-bottom: ${({ theme }) => theme.spacing(37)}px;
  background-color: #ef3e33;
  border-radius: ${({ borderRadiusMobile }) =>
    `0px 0px ${borderRadiusMobile}px ${borderRadiusMobile}px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    min-height: 100vh;
    padding-top: ${({ theme }) => theme.spacing(26)}px;
    padding-bottom: ${({ theme }) => theme.spacing(11)}px;
    border-radius: ${({ borderRadiusDesk }) =>
      `0px 0px ${borderRadiusDesk}px ${borderRadiusDesk}px`};
  }
`;

export const Content = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(7)}px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 567px;
    font-size: 56px;
  }
`;
