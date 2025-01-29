import styled from '@emotion/styled';
import { IStyledContentProps } from './AtbFunFactSection.types';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing(25)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;

export const Container = styled.div`
  padding: 1px;
  border-radius: 20px;
  background-image: conic-gradient(
    from 80deg,
    #161616,
    #ffffff,
    #161616,
    #ffffff,
    #161616
  );
  overflow: hidden;
`;

export const Content = styled.div<IStyledContentProps>`
  padding: ${({ theme: { spacing } }) => `${spacing(12)}px ${spacing(20)}px`};
  border-radius: inherit;
  background-color: #161616;
  background-image: url(${({ decorativeElement }) => decorativeElement});
  background-size: 107px 90px;
  background-position: top 50% left 16px;
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  width: 588px;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
`;
