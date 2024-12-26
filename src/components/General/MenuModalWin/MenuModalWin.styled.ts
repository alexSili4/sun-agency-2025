import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(20)};
`;

export const LinksWrap = styled.div`
  display: flex;
`;
