import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledTitleProps } from './AnimatedSectionTitle.types';

export const Container = styled(motion.div)`
  overflow: hidden;
`;

export const Title = styled(motion.h2)<IStyledTitleProps>`
  position: ${({ isHidden }) => isHidden && 'absolute'};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: ${({ isCenter }) => (isCenter ? 'center' : 'start')};
  transform: ${({ isHidden }) => isHidden && 'scale(0) !important'};
`;
