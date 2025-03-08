import { theme } from '@/constants';
import styled from '@emotion/styled';
import { IStyledContainerProps } from './HeroSectionBusinessMetricDetails.types';

const listGap = theme.spacing(8);

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${listGap}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(8)}px;
    height: 100%;
    padding-right: ${({ shouldShowPadding }) =>
      shouldShowPadding && `${listGap}px`};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-grow: 1;
  }
`;

export const Title = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Delimiter = styled.div`
  height: 1px;
  background-color: #1f1f1f;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 1px;
    height: 100%;
  }
`;
