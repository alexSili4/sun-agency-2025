import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;
`;

export const TitlePartContainer = styled(motion.span)`
  width: 100%;
  text-align: center;
  overflow-y: hidden;
`;

export const TitlePart = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 81.96px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Accent = styled.em`
  font-family: ${({ theme }) => theme.fontFamily.pliska};
  font-size: 88.54px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: lowercase;
`;

export const Symbol = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;
