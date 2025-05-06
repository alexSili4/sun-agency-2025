import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledTitleProps } from './AnimatedClientsSectionSubtitle.types';

export const Title = styled.h3<IStyledTitleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }
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
