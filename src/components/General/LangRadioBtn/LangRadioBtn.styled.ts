import styled from '@emotion/styled';
import {
  IStyledTitleWrapProps,
  IStyledContainerProps,
} from './LangRadioBtn.types';

export const Container = styled.label<IStyledContainerProps>`
  display: block;
  padding-right: ${({ theme, isLastRadioBtn }) =>
    !isLastRadioBtn && theme.spacing()};
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc},
    transform ${({ theme }) => theme.transitionDurationAndFunc};

  div:not(:has(input:is(:hover, :focus))) > div > & {
    transform: translateX(0px);

    &:not(:has(input:checked)) {
      opacity: 0;
    }
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
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 50%;
  border: 1px solid;
  border-color: transparent;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  label:has(input:checked) > & {
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  text-transform: uppercase;
  transition: text-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  *:has(input:checked) > span > & {
    text-shadow: 0px 1px 5px #fff9d7;
  }
`;
