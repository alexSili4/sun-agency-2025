import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IStyledSwiperSlideProps } from './ReviewsSlider.types';

export const Container = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(18)};
`;

export const StyledSwiper = styled(Swiper)`
  overflow: visible !important;
`;

export const StyledSwiperSlide = styled(SwiperSlide)<IStyledSwiperSlideProps>`
  width: ${({ slideWidth, gap }) => slideWidth + gap}px !important;
  height: ${({ slideHeight }) => slideHeight}px !important;
  padding-left: ${({ gap }) => gap}px;

  &:last-of-type {
    width: ${({ slideWidth, gap }) => slideWidth + gap * 2}px !important;
    padding-right: ${({ gap }) => gap}px;
  }
`;
