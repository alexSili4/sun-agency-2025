import styled from '@emotion/styled';
import cardBg from '@/images/main/projects/card-bg.png';
import { IStyledProps } from './ProjectsSectionProjectCard.types';
import { Link } from 'react-router-dom';

export const ContentWrap = styled.div`
  direction: ltr;
  background-image: url(${cardBg});
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  padding: ${({ theme }) => theme.spacing(3)}px;
  pointer-events: all;
`;

export const ImgWrap = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc.all};

  a:is(:hover, :focus) > div > div > &,
  div:has(a:is(:hover, :focus)) > div > & {
    transform: scale(0.99);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 347px;

    a:is(:hover, :focus) > div > div > &,
    div:has(a:is(:hover, :focus)) > div > & {
      transform: scale(0.95);
    }
  }
`;

export const Name = styled.p<IStyledProps>`
  position: absolute;
  bottom: ${({ isNewProject }) => (isNewProject ? 110 : 39)}px;
  left: 50%;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
    bottom: ${({ isNewProject }) => (isNewProject ? 158 : 45)}px;
  }
`;

export const Year = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 12.7px;
  font-weight: 500;
  line-height: 1;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  overflow: hidden;
  aspect-ratio: 315 / 417;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    aspect-ratio: 347 / 583;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: 55px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => `${spacing(3)}px ${spacing(5)}px`};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 11px;
  background-color: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: 85px;
    padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(7)}px`};
    border-radius: 16px;
    font-size: 16px;
  }
`;
