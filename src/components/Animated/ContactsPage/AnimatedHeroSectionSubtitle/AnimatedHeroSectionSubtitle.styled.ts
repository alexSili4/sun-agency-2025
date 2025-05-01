import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.div)``;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 574px;
    text-align: center;
  }
`;
