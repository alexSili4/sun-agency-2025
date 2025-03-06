import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  IStyledTextPartProps,
  IStyledTextWrapProps,
} from './AnimatedHeroSectionTitle.types';

export const Container = styled.div``;

export const Title = styled(motion.h2)``;

export const TextWrap = styled.span<IStyledTextWrapProps>`
  display: block;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMob }) => isHiddenOnMob && 'none'};
  }
`;

export const Text = styled(motion.span)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 66px;
  }
`;

export const TextPart = styled.span<IStyledTextPartProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
  }
`;

export const Accent = styled.em`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.pliska};
  font-style: italic;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: lowercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 72px;
  }
`;
