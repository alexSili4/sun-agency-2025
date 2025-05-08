import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledSubtitleProps } from './AnimatedSectionSubtitle.types';

export const Subtitle = styled(motion.h3)<IStyledSubtitleProps>`
  text-align: ${({ isCenter }) => (isCenter ? 'center' : 'start')};

  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
  }
`;

export const SubtitlePart = styled(motion.span)`
  display: inline-block;
  white-space: pre;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 48px;
  }
`;
