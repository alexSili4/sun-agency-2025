import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(20)};
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
`;

export const DetailsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(19)};
`;

export const Image = styled.img`
  width: 110px;
  height: 92px;
`;

export const GlowImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 1194px;
  max-width: 1194px;
  height: 18px;
  transform: translateY(50%);
  transition: filter ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionDurationAndFunc},
    transform ${({ theme }) => theme.transitionDurationAndFunc};

  a:not(:is(:hover, :focus)) > div > & {
    filter: grayscale(100%);
    opacity: 0.2;
  }

  a:is(:hover, :focus) > div > & {
    transform: translateX(-177px);
  }
`;
