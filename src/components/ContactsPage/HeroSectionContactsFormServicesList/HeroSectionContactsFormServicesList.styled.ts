import styled from '@emotion/styled';
import { IStyledContainerProps } from './HeroSectionContactsFormServicesList.types';

export const Container = styled.div<IStyledContainerProps>`
  display: block;
  max-height: ${({ isShow, height }) => (isShow ? height : 0)}px;
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const Content = styled.div`
  display: block;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const ListWrap = styled.div`
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  background-color: #121212;
  padding: ${({ theme }) => theme.spacing(4)}px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListItem = styled.li``;
