import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  IStyledBackdropWrapProps,
  IStyledMotionDivProps,
} from './SmoothFadeUpModalWin.types';

export const MotionDiv = styled(motion.div)<IStyledMotionDivProps>`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackdropWrap = styled.div<IStyledBackdropWrapProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  overflow-y: auto;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;