import styled from '@emotion/styled';
import { IStyledContainerProps } from './PrinciplesSectionSliderPrincipleDetails.types';

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  opacity: ${({ isActiveSlide }) => (isActiveSlide ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-left: ${({ theme }) => theme.padding.container}px;
    padding-right: ${({ theme }) => theme.padding.container}px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;
