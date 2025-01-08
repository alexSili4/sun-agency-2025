import styled from '@emotion/styled';
import cardBg from '@/images/projects/card-bg.png';
import { IStyledProps } from './ProjectCard.types';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export const ContentWrap = styled.div`
  direction: ltr;
  background-image: url(${cardBg});
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const ImgWrap = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 347px;
  height: 583px;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  a:is(:hover, :focus) > div > div > &,
  div:has(a:is(:hover, :focus)) > div > & {
    transform: scale(0.95);
  }
`;

export const Name = styled.p<IStyledProps>`
  position: absolute;
  bottom: ${({ isNewProject }) => (isNewProject ? 158 : 45)}px;
  left: 50%;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  transform: translateX(-50%);
`;

export const Year = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transform: translateX(-50%);
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: 85px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => `${spacing(4)} ${spacing(7)}`};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  transform: translateX(-50%);
`;

export const StyledSplineContainer = styled.div`
  position: absolute;
  bottom: 256px;
  left: 50%;
  width: 304px;
  height: 218px;
  transform: translateX(-50%);
`;

export const StyledSpline = styled(Spline)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1000px !important;
  transform: translateX(-50%) translateY(-50%);
`;
