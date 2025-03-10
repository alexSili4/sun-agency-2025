import styled from '@emotion/styled';

export const Title = styled.h2`
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.11),
    rgba(255, 255, 255, 0.04)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 180px;
    font-weight: 500;
    line-height: 1.3;
  }
`;
