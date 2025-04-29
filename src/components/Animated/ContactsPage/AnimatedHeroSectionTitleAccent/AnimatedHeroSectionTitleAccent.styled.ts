import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.span`
  display: inline-block;
`;

export const AnimatedElement = styled(motion.span)`
  display: inline-block;
`;

export const AccentSymbol = styled.span`
  display: inline-block;
  white-space: pre;
  color: rgba(255, 255, 255, 0.7);
  font-family: ${({ theme }) => theme.fontFamily.pliska};
  font-style: italic;
  font-size: 30px;
  font-weight: 400;
  line-height: 0.6;
  text-transform: lowercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 80px;
    line-height: 1.16;
  }
`;
