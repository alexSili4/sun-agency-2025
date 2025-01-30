import styled from '@emotion/styled';
import { IStyledTextProps } from './Copyright.types';

export const Text = styled.p<IStyledTextProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }
`;
