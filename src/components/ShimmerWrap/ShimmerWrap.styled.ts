import styled from '@emotion/styled';
import { IStyledBackdrop } from './ShimmerWrap.types';
import { ShimmerDiv } from 'shimmer-effects-react';

export const Container = styled.div`
  position: relative;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const StyledShimmerDiv = styled(ShimmerDiv)`
  filter: blur(3px);
  animation-delay: 100ms;
  /* transform: rotate(30deg); */

  div:not(:has(button:is(:hover, :focus))) > & {
    display: none;
  }
`;

export const Backdrop = styled.div<IStyledBackdrop>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: ${({ rounded }) => rounded}%;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(button:is(:hover, :focus)) > & {
    opacity: 0;
  }
`;
