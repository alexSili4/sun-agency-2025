import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Image = styled(motion.img)`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
`;
