import styled from '@emotion/styled';
import {
  IStyledButtonProps,
  IStyledContainerProps,
} from './ClientsSectionFiltersItem.types';
import { getFlexItemWidth } from '@/utils';

export const Container = styled.div<IStyledContainerProps>`
  position: relative;
  width: calc(
    ${({ containerGap, listLength }) =>
      getFlexItemWidth({ listGap: containerGap, listLength })}
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ widthDesk }) => widthDesk}px;
  }
`;

export const Button = styled.button<IStyledButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)}px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.white7};
  border-radius: 8px;
  backdrop-filter: blur(8px);
  background-color: ${({ theme }) => theme.colors.dark};

  & > svg {
    color: ${({ isShowList, theme }) =>
      isShowList ? theme.colors.white : '#646464'};
    transform: rotate(${({ isShowList }) => (isShowList ? 180 : 0)}deg);
    transition: color ${({ theme }) => theme.transitionDurationAndFunc.all},
      transform ${({ theme }) => theme.transitionDurationAndFunc.all};
  }

  &:is(:hover, :focus) {
    outline: none;
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(${({ isShowList }) => (isShowList ? 0 : 180)}deg);
  }
`;

export const BtnTitle = styled.span`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
