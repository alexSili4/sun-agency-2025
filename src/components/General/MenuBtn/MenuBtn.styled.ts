import styled from '@emotion/styled';
import { IStyledButtonProps } from './MenuBtn.types';

export const Button = styled.button<IStyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  aspect-ratio: 1 / 1;
  background-color: transparent;
  padding: 0;
  border: 1px solid;
  border-radius: 50%;
  opacity: ${({ shouldHide }) => shouldHide && 0};
  transform: translateY(${({ shouldHide }) => shouldHide && -100}%);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  pointer-events: all;
  outline: none;
`;
