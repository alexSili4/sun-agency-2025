import styled from '@emotion/styled';
import { IStyledContentProps } from './ClientsSectionFilters.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div<IStyledContentProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap}px;
`;
