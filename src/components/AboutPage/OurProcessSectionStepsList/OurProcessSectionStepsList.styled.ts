import styled from '@emotion/styled';
import { IStyledListItemProps } from './OurProcessSectionStepsList.types';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
`;

export const ListItem = styled.li<IStyledListItemProps>`
  height: ${({ isHiddenElement }) => (isHiddenElement ? 0 : '100%')};
`;
