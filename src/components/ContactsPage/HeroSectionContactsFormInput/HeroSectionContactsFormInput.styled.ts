import styled from '@emotion/styled';
import {
  IStyledLabelProps,
  IStyledInputProps,
  IStyledTitleProps,
  IStyledContainerProps,
} from './HeroSectionContactsFormInput.types';
import { getFlexItemWidth } from '@/utils';

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
    width: calc(
      ${({ gapDesk, rowLength }) =>
        getFlexItemWidth({ listGap: gapDesk, listLength: rowLength })}
    );
  }
`;

export const ServiceBtnWrap = styled.div`
  position: relative;
`;

export const Label = styled.label<IStyledLabelProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
    width: calc(
      ${({ gapDesk, rowLength, isTextArea }) =>
        isTextArea
          ? '100%'
          : getFlexItemWidth({ listGap: gapDesk, listLength: rowLength })}
    );
  }
`;

export const Title = styled.span<IStyledTitleProps>`
  color: ${({ theme: { colors }, isInvalidField }) =>
    isInvalidField ? colors.error : colors.white70};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Input = styled.input<IStyledInputProps>`
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ isInvalidField, theme }) =>
    isInvalidField ? theme.colors.error : 'transparent'};
  background: rgba(51, 51, 51, 0.2);
  padding: ${({ theme }) => theme.spacing(4)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc.all},
    box-shadow ${({ theme }) => theme.transitionDurationAndFunc.all};

  &::placeholder {
    color: #444444;
  }

  &:is(:hover, :focus) {
    outline: none;
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 140px;
  border-radius: 5px;
  border: 1px solid;
  border-color: transparent;
  background: rgba(51, 51, 51, 0.2);
  padding: ${({ theme }) => theme.spacing(4)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc.all},
    box-shadow ${({ theme }) => theme.transitionDurationAndFunc.all};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 100px;
  }

  &::placeholder {
    color: #444444;
  }

  &:is(:hover, :focus) {
    outline: none;
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.1);
  }
`;
