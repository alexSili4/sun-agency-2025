import { animations } from '@/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Title = styled.h2`
  background: linear-gradient(120deg, #000 40%, #fff 50%, #000 60%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${animations.shinyText} 3s linear infinite;
`;

export const AnimatedContainer = styled(motion.span)`
  display: block;
`;

export const TextLine = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)}px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: 0px;
    width: 1063px;
  }
`;

export const AnimatedElement = styled(motion.span)`
  display: inline-block;
`;

export const TextLineWord = styled.span`
  display: inline-block;
  white-space: pre;
  color: rgba(255, 255, 255, 0.5);
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 66px;
  }
`;

export const Accent = styled.span`
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
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
