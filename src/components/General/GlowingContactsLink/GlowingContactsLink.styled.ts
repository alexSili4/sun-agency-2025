import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledProps } from './GlowingContactsLink.types';

export const StyledLink = styled(Link)<IStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  width: ${({ width }) => width}px;
  height: 56px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.body};
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    border-color: transparent;
  }
`;

export const LinkIcon = styled.span`
  width: 10px;
  aspect-ratio: 1 / 1;
  background-color: #ffcd33;
  border-radius: 50%;
`;

export const LinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 18.67px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0%;
  text-align: left;
`;
