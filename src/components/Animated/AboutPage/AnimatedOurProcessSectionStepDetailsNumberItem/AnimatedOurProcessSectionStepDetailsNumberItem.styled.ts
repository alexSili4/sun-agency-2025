import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.div)``;

export const Number = styled.p`
  color: rgba(255, 255, 255, 0.11);
  font-family: ${({ theme }) => theme.fontFamily.pliska};
  font-style: italic;
  font-size: 104.01px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.1em;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 221.3px;
  }
`;
