import { animations } from '@/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Title = styled.h2`
  background-image: linear-gradient(120deg, #000 40%, #fff 50%, #000 60%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${animations.shinyText} 3s linear infinite;
`;

export const AnimatedContainer = styled(motion.span)`
  display: block;
`;

export const Text = styled.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)}px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: center;
    gap: 0px;
    width: 1063px;
  }
`;
