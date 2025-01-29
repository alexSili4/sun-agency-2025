import styled from '@emotion/styled';
import { IStyledBackgroundProps } from './AtbProjectDetailsHeroSection.types';

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Background = styled.div<IStyledBackgroundProps>`
  display: flex;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(26)}px;
  padding-bottom: ${({ theme }) => theme.spacing(11)}px;
  background-color: #ef3e33;
  border-radius: ${({ borderRadius }) =>
    `0px 0px ${borderRadius}px ${borderRadius}px`};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(8)}px;
  height: 100%;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const Title = styled.h2`
  width: 567px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 56px;
  font-weight: 500;
  line-height: 1.3;
`;
