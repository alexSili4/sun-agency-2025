import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const ListItem = styled.li``;

export const StyledLink = styled(Link)`
  padding: ${({ theme: { spacing } }) => `${spacing(13)}px ${spacing(5)}px`};
  color: #dedede;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all};

  li:first-of-type > & {
    padding-left: 0;
  }

  li:last-of-type > & {
    padding-right: 0;
  }

  ul:has(&:is(:hover, :focus)) > li:not(:has(&:is(:hover, :focus))) > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;
