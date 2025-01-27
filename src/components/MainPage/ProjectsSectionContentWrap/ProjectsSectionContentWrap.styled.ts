import styled from '@emotion/styled';
import { IStyledContainerProps } from './ProjectsSectionContentWrap.types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isProjectsListWrap?: boolean;
}

export const Container = styled.div<IStyledContainerProps>`
  display: ${({ isProjectsListWrap }) => !isProjectsListWrap && 'flex'};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding-top: ${({ theme, isProjectsListWrap }) =>
    !isProjectsListWrap && theme.spacing(8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
`;
