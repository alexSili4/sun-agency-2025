import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const Container = styled.div``;

export const SliderWrap = styled.div`
  position: relative;
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
`;

export const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(15)}px;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(31)}px;
  padding-bottom: ${({ theme }) => theme.spacing(15)}px;
  overflow: visible;
`;
