import styled from '@emotion/styled';
import { IStyledTitleProps } from './FeatureSectionMetricsListMetricDetails.types';

export const Container = styled.div`
  padding: 1px;
  border-radius: 20px;
  background-image: conic-gradient(
    from 80deg,
    #161616,
    #ffffff,
    #161616,
    #ffffff,
    #161616
  );
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: inherit;
  padding: ${({ theme }) => theme.spacing(10)}px;
  background-color: #161616;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(3)}px;
    padding: ${({ theme: { spacing } }) => `${spacing(10)}px ${spacing(13)}px`};
  }
`;

export const Number = styled.p`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.16;
  text-transform: lowercase;
  filter: drop-shadow(1px 1px 4px rgba(255, 225, 67, 0.2));
  text-shadow: 0px 0px 0px #a34400, 1px 0px 0px #a34400, 1px 1px 0px #a34400,
    0px 1px 0px #a34400, -1px 1px 0px #a34400, -1px 0px 0px #a34400,
    -1px -1px 0px #a34400, 0px -1px 0px #a34400, 1px -1px 0px #a34400;
`;

export const Title = styled.p<IStyledTitleProps>`
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: lowercase;
`;
