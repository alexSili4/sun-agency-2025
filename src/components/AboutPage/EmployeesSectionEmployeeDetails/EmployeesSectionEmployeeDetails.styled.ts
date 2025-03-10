import styled from '@emotion/styled';
import employeeBg from '@/images/about/employees/employee-bg.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(6)}px;
    padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(0)}px;
  }
`;

export const NameWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 443px;
    padding-right: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;

export const JobTitle = styled.p`
  color: #7a7a7a;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const ImageWrap = styled.div`
  display: flex;
  background-image: url(${employeeBg});
  background-position: center;
  background-size: 100px 82px;
  background-repeat: no-repeat;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-size: 143px 118px;
  }
`;

export const Avatar = styled.img`
  width: 70px;
  aspect-ratio: 1 / 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 92px;
  }
`;

export const Border = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
`;
