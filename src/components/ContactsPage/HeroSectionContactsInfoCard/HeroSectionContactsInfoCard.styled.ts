import styled from '@emotion/styled';

export const Container = styled.span`
  position: relative;
  display: flex;
  height: 100%;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
  border-radius: inherit;
  padding: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
  background-color: ${({ theme }) => theme.colors.darkBg};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
    padding: ${({ theme: { spacing } }) => `${spacing(8)}px ${spacing(12)}px`};
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
  }
`;

export const MarkerWrap = styled.div`
  padding: ${({ theme }) => theme.spacing(2)}px;
  border-radius: 8px;
  backdrop-filter: blur(2px);
  background: linear-gradient(
    156.57deg,
    rgb(255, 3, 3) -4.986%,
    rgb(255, 205, 51) 96.688%
  );
`;

export const Marker = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`;

export const DecorativeLine = styled.div`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.09) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;
