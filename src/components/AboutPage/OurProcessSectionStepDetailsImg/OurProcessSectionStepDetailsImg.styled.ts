import styled from '@emotion/styled';
import { IStyledContainerProps } from './OurProcessSectionStepDetailsImg.types';

export const Container = styled.div<IStyledContainerProps>`
  align-self: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 100%;
  aspect-ratio: 516 / 526;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.process};
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Border = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(217, 217, 217, 0);
  border-radius: 50%;
`;
