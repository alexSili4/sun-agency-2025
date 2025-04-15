import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  align-self: center;
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 316px;
  height: 322px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 516px;
    height: 526px;
  }
`;
