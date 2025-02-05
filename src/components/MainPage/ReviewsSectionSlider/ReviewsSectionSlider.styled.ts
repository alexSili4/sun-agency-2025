import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IStyledSwiperSlideProps } from './ReviewsSectionSlider.types';

export const Container = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(18)}px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  overflow: visible !important;
`;

export const StyledSwiperSlide = styled(SwiperSlide)<IStyledSwiperSlideProps>`
  width: ${({ slideWidthMob, gap }) => slideWidthMob + gap}px !important;
  height: ${({ slideHeight }) => slideHeight}px !important;
  padding-left: ${({ gap }) => gap}px;

  &:last-of-type {
    width: ${({ slideWidthMob, gap }) => slideWidthMob + gap * 2}px !important;
    padding-right: ${({ gap }) => gap}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ slideWidthDesk, gap }) => slideWidthDesk + gap}px !important;

    &:last-of-type {
      width: ${({ slideWidthDesk, gap }) =>
        slideWidthDesk + gap * 2}px !important;
    }
  }
`;
