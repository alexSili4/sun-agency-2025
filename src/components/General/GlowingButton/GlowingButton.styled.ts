import styled from '@emotion/styled';
import { IStyledProps } from './GlowingButton.types';

export const Button = styled.button<IStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width}px;
  aspect-ratio: 1 / 1;
  padding: 0;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  & > svg {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
  }
`;
