import styled from '@emotion/styled';

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

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(20)}px;
  }
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-weight: 400;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;

export const DetailsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(19)}px;
`;

export const Image = styled.img`
  width: 81px;
  height: 68px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 110px;
    height: 92px;
  }
`;

export const GlowImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 100%;
  height: 18px;
  transition: filter ${({ theme }) => theme.transitionDurationAndFunc.all},
    opacity ${({ theme }) => theme.transitionDurationAndFunc.all},
    transform ${({ theme }) => theme.transitionDurationAndFunc.all};

  a:not(:is(:hover, :focus)) > div > & {
    filter: grayscale(100%);
    opacity: 0.2;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 83vw;
    transform: translateY(50%);

    a:is(:hover, :focus) > div > & {
      transform: translateX(-177px) translateY(50%);
    }
  }
`;
