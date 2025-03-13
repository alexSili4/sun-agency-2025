import styled from '@emotion/styled';
import {
  IStyledProgressProps,
  IStyledListItemProps,
} from './PrinciplesSectionSliderPagination.types';

export const Container = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 240px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListItem = styled.li<IStyledListItemProps>`
  flex-grow: ${({ isActiveBtn }) => (isActiveBtn ? 1 : 0)};
  flex-shrink: 0;
  width: 41px;
  transition: flex-grow ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 21px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 4px;
  border: none;
  padding: 0;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.19);
`;

export const Progress = styled.span<IStyledProgressProps>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  border-radius: inherit;
  background-color: rgba(255, 245, 211, 0.7);
  box-shadow: 0px 0px 4px 0px #ffc888;
  filter: blur(1px);
`;
