import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { IStyledListItemProps } from './AtbBusinessMetricsList.types';

const listGap = theme.spacing(4);

export const List = styled.ul`
  display: flex;
  gap: ${listGap}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li<IStyledListItemProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc(
      ${({ businessMetrics }) =>
        getFlexItemWidth({ listGap, listLength: businessMetrics })}
    );
  }
`;
