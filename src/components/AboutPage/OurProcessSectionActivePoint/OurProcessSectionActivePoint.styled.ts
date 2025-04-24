import styled from '@emotion/styled';
import {
  IStyledElementProps,
  IStyledContainerProps,
} from './OurProcessSectionActivePoint.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    transform: translateY(${({ translateY }) => translateY}px);
    transition: transform
      ${({ theme }) => theme.transitionDurationAndFunc.process};
  }
`;

export const Element = styled.div<IStyledElementProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate(${({ rotate }) => rotate}deg);
  transition: transform
    ${({ theme }) => theme.transitionDurationAndFunc.process};
`;

export const PointWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const PointBg = styled.div`
  position: relative;
  width: 11px;
  aspect-ratio: 1 / 1;
  filter: blur(1.75px);
  background-color: #ecdec5;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 17px;
    filter: blur(5.71px);
    background-image: radial-gradient(
      43% 43% at 50% 50%,
      rgb(252, 225, 144) 37.9%,
      rgb(255, 249, 215) 96.4%,
      rgb(255, 127, 7) 100%
    );
  }
`;

export const Point = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 1.93px 0px rgb(255, 249, 220);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    box-shadow: 0px 0px 3.15px 0px #fff9dc;
  }

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22px;
    height: 26px;
    transform: translateX(-50%) translateY(-50%);

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 36px;
      height: 43px;
    }
  }
`;
