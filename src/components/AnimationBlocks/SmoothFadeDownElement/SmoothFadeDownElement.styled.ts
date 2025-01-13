import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledContainerProps } from './SmoothFadeDownElement.types';

export const Container = styled(motion.div)<IStyledContainerProps>`
  position: ${({ isPositionAbsolute }) => isPositionAbsolute && 'absolute'};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;

export const ElementWrap = styled(motion.div)``;
