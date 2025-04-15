import styled from '@emotion/styled';
import {
  IStyledTitleWrapProps,
  IStyledContainerProps,
  IStyledTitleProps,
} from './HeaderLangRadioBtn.types';

export const Container = styled.label<IStyledContainerProps>`
  display: block;
  padding-right: ${({ theme, isLastRadioBtn }) =>
    !isLastRadioBtn && `${theme.spacing(4)}px`};
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all},
    transform ${({ theme }) => theme.transitionDurationAndFunc.all};

  div:not(:has(input:is(:hover, :focus))) > div > & {
    transform: ${({ isFullMenu }) => !isFullMenu && 'translateX(0px)'};

    &:not(:has(input:checked)) {
      opacity: ${({ isFullMenu }) => !isFullMenu && 0};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-right: ${({ theme, isLastRadioBtn }) =>
      !isLastRadioBtn && `${theme.spacing()}px`};
  }
`;

export const RadioBtn = styled.input`
  position: absolute;
  transform: scale(0);
`;

export const TitleWrap = styled.span<IStyledTitleWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ mobileWidth }) => mobileWidth}px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid;
  border-color: transparent;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc.all};

  div:has(input:is(:hover, :focus)) label:has(input:checked) > & {
    border-color: rgba(255, 255, 255, 0.12);
  }

  label:has(input:checked) > & {
    border-color: ${({ isFullMenu }) =>
      isFullMenu && 'rgba(255, 255, 255, 0.12)'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ deskWidth }) => deskWidth}px;
  }
`;

export const Title = styled.span<IStyledTitleProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.07;
  text-transform: uppercase;
  transition: text-shadow ${({ theme }) => theme.transitionDurationAndFunc.all};

  *:has(input:is(:hover, :focus, :checked)) > span > & {
    text-shadow: 0px 1px 5px #fff9d7;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: ${({ isFullMenu }) => (isFullMenu ? 14 : 15)}px;
  }
`;
