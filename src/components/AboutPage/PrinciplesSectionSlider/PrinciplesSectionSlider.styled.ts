import { ClassNames } from '@/constants';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(32)}px;
`;

export const SliderWrap = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 100%;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(100% + 70px + 70px);
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 50%;
  background-color: #161616;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 516px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(15)}px;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(31)}px;
  padding-bottom: ${({ theme }) => theme.spacing(15)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(38)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
    overflow: visible;

    & .${ClassNames.swiperWrapper}:not(.swiper-slide-active) {
      pointer-events: none !important;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 346px !important;
`;
