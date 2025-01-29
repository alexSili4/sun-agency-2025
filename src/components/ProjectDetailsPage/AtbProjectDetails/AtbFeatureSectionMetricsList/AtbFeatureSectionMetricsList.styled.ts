import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { IStyledListItemProps } from './AtbFeatureSectionMetricsList.types';

const listGap = theme.spacing(4);

export const List = styled.ul`
  display: flex;
  gap: ${listGap}px;
`;

export const ListItem = styled.li<IStyledListItemProps>`
  width: calc(
    ${({ metrics }) => getFlexItemWidth({ listGap, listLength: metrics })}
  );
`;
