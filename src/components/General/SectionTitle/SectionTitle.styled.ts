import styled from '@emotion/styled';
import { IStyledProps } from './SectionTitle.types';

export const Title = styled.h2<IStyledProps>`
  position: ${({ isHidden }) => isHidden && 'absolute'};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  transform: ${({ isHidden }) => isHidden && 'scale(0)'};
`;
