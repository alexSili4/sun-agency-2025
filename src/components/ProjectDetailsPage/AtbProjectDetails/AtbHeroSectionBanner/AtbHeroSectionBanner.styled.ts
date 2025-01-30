import styled from '@emotion/styled';
import { IStyledContainerProps } from './AtbHeroSectionBanner.types';
import atbHeroBg from '@/images/projects/atb-hero-bg.jpg';

export const Container = styled.div<IStyledContainerProps>`
  border-radius: ${({ borderRadiusMobile }) => borderRadiusMobile}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    height: 263px;
    background-image: url(${atbHeroBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ borderRadiusDesk }) =>
      `0px 0px ${borderRadiusDesk}px ${borderRadiusDesk}px`};
    overflow: hidden;
  }
`;

export const Image = styled.img`
  width: 866px;
  height: 642px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    position: absolute;
    bottom: -142px;
    left: 50%;
    max-width: 866px;
    transform: translateX(calc(-50% - 10px));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
