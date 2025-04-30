import styled from '@emotion/styled';
import { IStyledButtonProps } from './GlowingFormBtn.types';

export const Button = styled.button<IStyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: ${({ width }) => width}px;
  border-radius: 16px;
  border: none;
  height: 56px;
  padding: 0;
  background-color: transparent;
`;

export const Title = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
`;
