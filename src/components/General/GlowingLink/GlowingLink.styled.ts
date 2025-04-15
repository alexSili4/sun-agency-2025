import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledProps } from './GlowingLink.types';

export const StyledLink = styled(Link)<IStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: ${({ width }) => width}px;
  border-radius: 16px;
  height: 56px;
  margin: ${({ isCenter }) => isCenter && '0 auto'};
  pointer-events: ${({ isHidden }) => (isHidden ? 'none' : 'all')};
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const LinkIcon = styled.span`
  flex-shrink: 0;
  position: relative;
  width: 8px;
  aspect-ratio: 1 / 1;
  background-color: #ffcd33;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 8px;
  }
`;

export const LinkTitle = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 11px;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 18.67px;
  }
`;
