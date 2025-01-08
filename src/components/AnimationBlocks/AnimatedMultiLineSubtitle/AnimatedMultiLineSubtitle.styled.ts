import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};
`;

export const LineContainer = styled(motion.span)`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 48px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  overflow-y: hidden;
`;

export const Symbol = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;
