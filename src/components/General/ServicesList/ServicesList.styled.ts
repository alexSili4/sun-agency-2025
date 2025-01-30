import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  IStyledIconWrapProps,
  IStyledLinksListProps,
} from './ServicesList.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(26)}px;
    width: 562px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  padding-top: ${({ theme }) => theme.spacing()}px;
  padding-bottom: ${({ theme }) => theme.spacing()}px;
  border: none;
  background-color: transparent;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus))
    > div:not(:has(a:is(:hover, :focus)))
    > button
    > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 44px;
    font-weight: 600;
  }
`;

export const IconWrap = styled.span<IStyledIconWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  aspect-ratio: 1 / 1;
  transform: rotate(${({ isShowList }) => (isShowList ? 0 : 180)}deg);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) > & {
    transform: rotate(${({ isShowList }) => (isShowList ? 180 : 0)}deg);
  }

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const LinksList = styled.ul<IStyledLinksListProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    max-height: ${({ isShowList, scrollHeight }) =>
      isShowList ? scrollHeight : 0}px;
    overflow-y: hidden;
    transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
    display: flex;
    flex-direction: column;
  }
`;

export const LinksListItem = styled.li``;

export const StyledLink = styled(Link)`
  display: block;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: -0.14px;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus)) > div > ul > li > &:not(:is(:hover, :focus)) {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
    line-height: 1.4;
  }
`;
