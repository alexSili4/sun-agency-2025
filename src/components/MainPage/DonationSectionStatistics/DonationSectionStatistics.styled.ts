import styled from '@emotion/styled';
import {
  IStyledImageProps,
  IStyledStatisticsItemProps,
} from './DonationSectionStatistics.types';
import { motion } from 'framer-motion';

export const List = styled.ul`
  position: absolute;
  bottom: 18px;
  left: calc(
    50% + ${({ theme }) => theme.containerWidth.desktop / 2}px +
      ${({ theme }) => theme.padding.container}px
  );
  transform: translateX(-100%);
`;

export const ListItem = styled.li``;

export const StatisticsItem = styled(motion.div)<IStyledStatisticsItemProps>`
  position: ${({ isBaseItem }) => !isBaseItem && 'absolute'};
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 275px;
  padding-top: ${({ theme }) => theme.spacing(12)};
  padding-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const Image = styled.img<IStyledImageProps>`
  width: ${({ width }) => width}px;
  max-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: lowercase;
`;

export const TextPart = styled.span`
  display: block;
`;
