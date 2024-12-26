import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  width: 562px;
`;

export const ListItem = styled.li``;

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding-top: ${({ theme }) => theme.spacing(7)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};
`;

export const StyledLinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 44px;
  font-weight: 600;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus)) > ul > li > a:not(:is(:hover, :focus)) > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;
