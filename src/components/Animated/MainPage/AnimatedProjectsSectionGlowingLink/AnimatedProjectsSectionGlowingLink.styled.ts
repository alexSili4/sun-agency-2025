import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledContainerProps } from './AnimatedProjectsSectionGlowingLink.types';

export const Container = styled(motion.div)<IStyledContainerProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
  }
`;

export const Element = styled(motion.div)``;
