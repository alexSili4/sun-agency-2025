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
  padding-top: ${({ linkPadding }) => linkPadding}px;
  padding-bottom: ${({ linkPadding }) => linkPadding}px;

  ul:has(&:is(:hover, :focus)) > li:not(:has(&:is(:hover, :focus))) > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;

export const LinkTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
`;
