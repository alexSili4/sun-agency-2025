import styled from '@emotion/styled';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: absolute;
  bottom: 256px;
  left: 50%;
  width: 304px;
  height: 218px;
  transform: translateX(-50%);
`;

export const StyledSplineWrap = styled(motion.div)``;

export const StyledSpline = styled(Spline)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1000px !important;
  transform: translateX(-50%) translateY(-50%);
`;
