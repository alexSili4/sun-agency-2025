import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li``;

export const StyledLink = styled(Link)`
  padding: ${({ theme: { spacing } }) => `${spacing(13)} ${spacing(5)}`};
  color: #dedede;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;

  li:first-of-type > & {
    padding-left: 0;
  }

  li:last-of-type > & {
    padding-right: 0;
  }
`;
