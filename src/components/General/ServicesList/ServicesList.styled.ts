import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(26)}px;
  width: 562px;
`;

export const TitleWrap = styled.div`
  padding-top: ${({ theme }) => theme.spacing(8)}px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 44px;
  font-weight: 600;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus))
    > div:not(:has(a:is(:hover, :focus)))
    > div
    > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LinksListItem = styled.li``;

export const StyledLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.14px;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  li:not(:last-of-type) > & {
    padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  }

  div:has(a:is(:hover, :focus)) > div > ul > li > &:not(:is(:hover, :focus)) {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;
