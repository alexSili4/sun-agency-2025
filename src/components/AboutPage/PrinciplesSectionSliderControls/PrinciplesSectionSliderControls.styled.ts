import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledImageProps,
  IStyledListItemProps,
  IStyledListProps,
  IStyledMarkerProps,
  IStyledMarkerWrapProps,
} from './PrinciplesSectionSliderControls.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: 0;
  left: 50%;
  width: ${({ size }) => size && size}px;
  aspect-ratio: 1 / 1;
  transform: translateX(-50%);
`;

export const List = styled.ul<IStyledListProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ size }) => size && size}px;
  aspect-ratio: 1 / 1;
  transform: translateX(-50%) translateY(-50%)
    rotate(${({ rotate }) => -rotate}deg);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const ListItem = styled.li<IStyledListItemProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    rotate(${({ rotate }) => rotate}deg)
    translateY(${({ radius }) => -radius}px);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Image = styled.img<IStyledImageProps>`
  width: 110px;
  aspect-ratio: 1 / 1;
  transform: scale(${({ isActiveBtn }) => (isActiveBtn ? 1.37 : 1)});
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) > & {
    transform: scale(${1.37});
  }
`;

export const MarkerWrap = styled.span<IStyledMarkerWrapProps>`
  position: absolute;
  top: 29px;
  left: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  aspect-ratio: 1 / 1;
  border: 0.65px solid;
  border-color: ${({ isActiveBtn }) => (isActiveBtn ? '#9d9d9d' : '#3B3B3B')};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.dark};
  transform: translateX(${({ isActiveBtn }) => (isActiveBtn ? 12 : 0)}px)
    translateY(${({ isActiveBtn }) => (isActiveBtn ? -18 : 0)}px)
    scale(${({ isActiveBtn }) => (isActiveBtn ? 2 : 1)});
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc},
    border-color ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) > & {
    border-color: #9d9d9d;
    transform: translateX(12px) translateY(-18px) scale(${2});
  }
`;

export const Marker = styled.span<IStyledMarkerProps>`
  color: ${({ isActiveBtn, theme }) =>
    isActiveBtn ? theme.colors.white : '#3e4648'};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 5.7px;
  font-weight: 400;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) > * > & {
    color: ${({ theme }) => theme.colors.white};
  }
`;
