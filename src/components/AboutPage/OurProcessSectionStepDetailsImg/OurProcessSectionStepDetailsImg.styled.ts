import styled from '@emotion/styled';
import { IStyledLogoProps } from './OurProcessSectionStepDetailsImg.types';

export const Container = styled.div`
  align-self: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 516 / 526;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 70%;
    transform: translateX(-50%) translateY(-50%);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 100%;
    max-height: 100%;
  }
`;

export const Logo = styled.div<IStyledLogoProps>`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.process};
`;

export const Border = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid ${({theme})=>theme.colors.white10};
  background-color: rgba(217, 217, 217, 0);
  border-radius: 50%;
`;
