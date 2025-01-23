import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Background = styled.div`
  height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(26)};
  padding-bottom: ${({ theme }) => theme.spacing(11)};
  background-color: #ef3e33;
  border-radius: 0px 0px 58px 58px;
`;

export const TitleWrap = styled.div``;

export const Title = styled.h2``;
