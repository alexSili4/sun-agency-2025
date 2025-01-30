import styled from '@emotion/styled';
import { IStyledProps } from './SocialLinks.types';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const ListItem = styled.li``;

export const StyledLink = styled.a<IStyledProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.colors.white};
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  padding-top: ${({ mobileLinkPadding }) => mobileLinkPadding}px;
  padding-bottom: ${({ mobileLinkPadding }) => mobileLinkPadding}px;

  ul:has(&:is(:hover, :focus)) > li:not(:has(&:is(:hover, :focus))) > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ deskLinkPadding }) => deskLinkPadding}px;
    padding-bottom: ${({ deskLinkPadding }) => deskLinkPadding}px;
  }
`;

export const LinkTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
`;
