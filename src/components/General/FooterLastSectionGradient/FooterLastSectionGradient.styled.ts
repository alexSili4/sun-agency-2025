import styled from '@emotion/styled';
import { IStyledContainerProps } from './FooterLastSectionGradient.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 114px;
  background-image: linear-gradient(
    180deg,
    ${({ startColor }) => startColor},
    ${({ theme }) => theme.colors.darkBg} 100%
  );
`;
