import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledTitleProps } from './HeroSectionTitle.types';

export const Title = styled.h1<IStyledTitleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
    gap: ${({ theme }) => theme.spacing()}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }
`;

export const TitlePartContainer = styled(motion.span)`
  width: 100%;
  text-align: center;
  overflow-y: hidden;
`;

export const TitlePart = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 66px;
  }
`;

export const Accent = styled.em`
  font-family: ${({ theme }) => theme.fontFamily.pliska};
  font-size: 28px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: lowercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 72px;
  }
`;

export const Symbol = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;
