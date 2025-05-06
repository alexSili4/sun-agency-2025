import styled from '@emotion/styled';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledSplineWrap = styled(motion.div)`
  width: 100%;
`;

export const StyledSpline = styled(Spline)``;
