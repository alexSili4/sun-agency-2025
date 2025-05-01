import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.span`
  display: block;
`;

export const AnimatedElement = styled(motion.span)`
  display: inline-block;
`;

export const TextLineSymbol = styled.span`
  display: inline-block;
  white-space: pre;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 66px;
  }
`;
