import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 50%;
  }
`;

export const ListItem = styled.li``;

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding-top: ${({ theme }) => theme.spacing(7)}px;
  padding-bottom: ${({ theme }) => theme.spacing(7)}px;
`;

export const StyledLinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0%;
  text-align: left;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus)) > ul > li > a:not(:is(:hover, :focus)) > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 44px;
  }
`;
