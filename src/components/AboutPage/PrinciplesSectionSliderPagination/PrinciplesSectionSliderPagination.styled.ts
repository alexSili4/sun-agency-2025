import styled from '@emotion/styled';
import {
  IStyledProgressProps,
  IStyledListItemProps,
} from './PrinciplesSectionSliderPagination.types';

export const Container = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListItem = styled.li<IStyledListItemProps>`
  width: ${({ isActiveBtn }) => (isActiveBtn ? '100%' : '41px')};
  transition: width ${({ theme }) => theme.transitionDurationAndFunc};
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
