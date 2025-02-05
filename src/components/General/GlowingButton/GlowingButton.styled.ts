import styled from '@emotion/styled';
import { IStyledProps } from './GlowingButton.types';

export const Button = styled.button<IStyledProps>`
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? 'absolute' : 'relative'};
  top: ${({ topMob }) => topMob};
  right: ${({ rightMob }) => rightMob};
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk};
    right: ${({ rightDesk }) => rightDesk};
  }
`;
