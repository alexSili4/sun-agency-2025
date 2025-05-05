import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledListContainerProps,
  IStyledListWrapProps,
} from './ClientsSectionFiltersItemList.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: ${({ isShow, height }) => (isShow ? height : 0)}px;
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const ContentWrap = styled.div`
  padding-top: 1px;
`;

export const Content = styled.div`
  overflow: hidden;
`;

export const ListContainer = styled.div<IStyledListContainerProps>`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-right: ${({ theme, maxHeight }) =>
    theme.spacing(maxHeight ? 1 : 0)}px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
`;

export const ListWrap = styled.div<IStyledListWrapProps>`
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};

  padding: ${({ theme }) => theme.spacing(4)}px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    margin-top: ${({ theme }) => theme.spacing(3)}px;
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
    background-color: rgba(255, 255, 255, 0.19);
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid rgba(255, 245, 211, 0.7);
    box-shadow: 0px 0px 4px 0px #ffc888;
    border-radius: 10px;
    filter: blur(1px);
    cursor: pointer;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListItem = styled.li``;
