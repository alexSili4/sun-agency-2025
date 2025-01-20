import styled from '@emotion/styled';
import Lottie from 'lottie-react';
import { IStyledLottieProps } from './LottieGlowingAnimation.types';

export const StyledLottie = styled(Lottie)<IStyledLottieProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  transform: translateX(-50%) translateY(-50%);
`;
