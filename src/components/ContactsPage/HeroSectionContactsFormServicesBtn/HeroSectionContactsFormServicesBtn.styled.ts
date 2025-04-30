import styled from '@emotion/styled';
import {
  IStyledBtnTitleProps,
  IStyledButtonProps,
} from './HeroSectionContactsFormServicesBtn.types';

export const Button = styled.button<IStyledButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  border: 1px solid;
  border-color: transparent;
  background: rgba(51, 51, 51, 0.2);
  padding: ${({ theme }) => theme.spacing(4)}px;
  opacity: ${({ isFake }) => (isFake ? 0 : 1)};
  pointer-events: ${({ isFake }) => (isFake ? 'none' : 'all')};
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc.all},
    box-shadow ${({ theme }) => theme.transitionDurationAndFunc.all};

  & > svg {
    color: #444444;
    transform: rotate(${({ isShowList }) => (isShowList ? 180 : 0)}deg);
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc.all};
  }

  &:is(:hover, :focus) {
    outline: none;
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.1);
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(${({ isShowList }) => (isShowList ? 0 : 180)}deg);
  }
`;

export const BtnTitle = styled.span<IStyledBtnTitleProps>`
  flex-grow: 1;
  color: ${({ isDefaultBtnTitle, theme }) =>
    isDefaultBtnTitle ? '#444444' : theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
    font-weight: 400;
  }
`;
