import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Background = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(43)};
  padding-bottom: ${({ theme }) => theme.spacing(18)};
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(20)};
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const ClientsMarqueeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(22)};
`;
