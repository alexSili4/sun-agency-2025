import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(35)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(25)}px;
`;

export const Content = styled.div``;

export const Image = styled.img``;
