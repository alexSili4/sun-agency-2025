import styled from '@emotion/styled';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  width: calc(100% + 80px + 80px);
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -146px;
    width: calc(100% + 48px + 48px);
    min-height: 200px;
  }
`;

export const StyledSplineWrap = styled(motion.div)``;

export const StyledSpline = styled(Spline)``;
