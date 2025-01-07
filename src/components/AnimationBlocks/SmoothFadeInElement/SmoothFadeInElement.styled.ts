import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { IStyledContainerProps } from './SmoothFadeInElement.types';

export const Container = styled(motion.div)<IStyledContainerProps>`
  position: ${({ isPositionAbsolute }) => isPositionAbsolute && 'absolute'};
  bottom: 0;
  left: 0;
`;

export const ElementWrap = styled(motion.div)``;
