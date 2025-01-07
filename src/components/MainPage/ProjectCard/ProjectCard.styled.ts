import styled from '@emotion/styled';
import cardBg from '@/images/projects/card-bg.png';

export const Container = styled.div`
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

  a:is(:hover, :focus) > div > div > & {
    transform: scale(0.95);
  }
`;

export const Name = styled.p`
  position: absolute;
  bottom: 45px;
  left: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
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
