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
  height: 56px;
  border-radius: 16px;
  pointer-events: all;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const LinkIcon = styled.span`
  position: relative;
  width: 10px;
  aspect-ratio: 1 / 1;
  background-color: #ffcd33;
  border-radius: 50%;
`;

export const LinkTitle = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 18.67px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0%;
  text-align: left;
`;
