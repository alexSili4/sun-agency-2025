import styled from '@emotion/styled';
import { IStyledStatisticsItemProps } from './HeroSectionBusinessMetricsList.types';
import { motion } from 'framer-motion';

export const List = styled.ul`
  position: absolute;
  right: 50%;
  bottom: 18px;
  transform: translateX(50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    right: 44px;
    transform: translateX(0);
  }
`;

export const ListItem = styled.li``;

export const StatisticsItem = styled(motion.div)<IStyledStatisticsItemProps>`
  position: ${({ isBaseItem }) => !isBaseItem && 'absolute'};
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
  width: 275px;
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 70px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: lowercase;
  filter: drop-shadow(1px 1px 4px rgba(255, 225, 67, 0.2));
  text-shadow: 0px 0px 0px #a34400, 1px 0px 0px #a34400, 1px 1px 0px #a34400,
    0px 1px 0px #a34400, -1px 1px 0px #a34400, -1px 0px 0px #a34400,
    -1px -1px 0px #a34400, 0px -1px 0px #a34400, 1px -1px 0px #a34400;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: lowercase;
`;
