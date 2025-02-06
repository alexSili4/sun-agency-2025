import styled from '@emotion/styled';
import { IStyledListProps, IStyledLinkProps } from './SocialLinks.types';

export const List = styled.ul<IStyledListProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    width: ${({ isFooter }) => isFooter && '100%'};
    justify-content: ${({ isFooter }) => isFooter && 'space-between'};
  }
`;

export const ListItem = styled.li``;

export const StyledLink = styled.a<IStyledLinkProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.colors.white};
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  padding-top: ${({ mobileLinkPadding }) => mobileLinkPadding}px;
  padding-bottom: ${({ mobileLinkPadding }) => mobileLinkPadding}px;

  div:has(a:is(:hover, :focus)) > ul > li:not(:has(&:is(:hover, :focus))) > & {
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
