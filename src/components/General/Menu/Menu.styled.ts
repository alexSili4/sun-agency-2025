import styled from '@emotion/styled';
import { IStyledMenuBtnProps } from './Menu.types';

export const MenuBtn = styled.button<IStyledMenuBtnProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.body};
  padding: 0;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: ${({ shouldHide }) => shouldHide && 0};
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    border-color: transparent;
  }
`;
