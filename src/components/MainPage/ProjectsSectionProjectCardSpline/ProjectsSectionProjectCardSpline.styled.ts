import styled from '@emotion/styled';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  display: flex;
  width: 304px;
  height: 218px;
  transform: translateX(-50%) scale(0.8);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 80px;
    transform: translateX(-50%) scale(1);
  }
`;

export const StyledSplineWrap = styled(motion.div)`
  height: 100%;
  background-color: violet;
`;

export const StyledSpline = styled(Spline)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1000px !important;
  transform: translateX(-50%) translateY(-50%);
`;
