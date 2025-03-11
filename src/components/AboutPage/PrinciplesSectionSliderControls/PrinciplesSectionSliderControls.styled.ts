import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledListItemProps,
  IStyledListProps,
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
    translateY(${({ radius }) => -radius}px) scale(${({ scale }) => scale});
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Image = styled.img`
  width: 110px;
  aspect-ratio: 1 / 1;
`;
