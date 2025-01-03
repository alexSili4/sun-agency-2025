import styled from '@emotion/styled';
import { IStyledContainerProps } from './GeneralContainer.types';

export const Container = styled.div<IStyledContainerProps>`
  width: ${({ theme: { containerWidth, padding } }) =>
    containerWidth.desktop + padding.container * 2}px;
  height: ${({ isFullHeight }) => isFullHeight && '100%'};
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;
`;
