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
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.pliska};
  font-style: italic;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: lowercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 72px;
  }
`;
