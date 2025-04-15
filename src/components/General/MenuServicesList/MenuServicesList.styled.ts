import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  IStyledIconWrapProps,
  IStyledLinksListProps,
} from './MenuServicesList.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing()}px;
    width: 50%;
    padding-bottom: ${({ theme }) => theme.spacing(13)}px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border: none;
  background-color: transparent;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-top: ${({ theme }) => theme.spacing()}px;
    padding-bottom: ${({ theme }) => theme.spacing()}px;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all};

  div:has(a:is(:hover, :focus))
    > div:not(:has(a:is(:hover, :focus)))
    > button
    > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 44px;
  }
`;

export const IconWrap = styled.span<IStyledIconWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  aspect-ratio: 1 / 1;
  transform: rotate(${({ isShowList }) => (isShowList ? 0 : 180)}deg);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc.all};

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
  max-height: ${({ isShowList, scrollHeight }) =>
    isShowList ? scrollHeight : 0}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const LinksListItem = styled.li``;

export const StyledLink = styled(Link)`
  display: block;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: -0.14px;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all};

  div:has(a:is(:hover, :focus)) > div > ul > li > &:not(:is(:hover, :focus)) {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamily.involve};
    font-size: 20px;
    font-weight: 400;
    line-height: 1, 25;
    letter-spacing: -0.12px;
  }
`;
