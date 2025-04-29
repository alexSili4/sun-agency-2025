import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { IStyledListItemProps } from './HeroSectionContactsInfo.types';
import { theme } from '@/constants';

const listGap = theme.spacing(4);

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${listGap}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li<IStyledListItemProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc(
      ${({ contacts }) => getFlexItemWidth({ listGap, listLength: contacts })}
    );
  }
`;
