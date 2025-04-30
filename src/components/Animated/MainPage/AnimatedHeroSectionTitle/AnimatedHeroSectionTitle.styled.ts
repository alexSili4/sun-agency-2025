import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.div)`
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc.all};
`;
