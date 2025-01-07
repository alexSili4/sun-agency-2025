import styled from '@emotion/styled';
import { IStyledContentWrapProps } from './ProjectsSectionContent.types';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.projectsContainer};
  width: 100%;
  height: 100vh;
  pointer-events: none;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ContentWrap = styled.div<IStyledContentWrapProps>`
  display: ${({ isProjectsListWrap }) => !isProjectsListWrap && 'flex'};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding-top: ${({ theme, isProjectsListWrap }) =>
    !isProjectsListWrap && theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SectionGradient = styled.img`
  width: 100%;
  height: auto;
`;
