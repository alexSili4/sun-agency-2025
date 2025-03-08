import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { IStyledListItemProps } from './HeroSectionBusinessMetrics.types';

const listGap = 0;

export const Container = styled.div`
  padding: 1px;
  border-radius: 20px;
  background-image: conic-gradient(
    from 80deg,
    #161616,
    #ffffff,
    #161616,
    #ffffff,
    #161616
  );
  overflow: hidden;
`;

export const ListWrap = styled.div`
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme: { spacing } }) => `${spacing(8)}px ${spacing(13)}px`};
  overflow: hidden;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    gap: ${listGap}px;
  }
`;

export const ListItem = styled.li<IStyledListItemProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${listGap}px;
    width: calc(
      ${({ metrics }) => getFlexItemWidth({ listGap, listLength: metrics })}
    );
  }
`;
