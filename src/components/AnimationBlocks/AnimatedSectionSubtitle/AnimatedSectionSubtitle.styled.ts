import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Subtitle = styled(motion.h3)`
  overflow: hidden;
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
