import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(23)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(23)}px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(20)}px;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContentWrap = styled.div`
  width: 668px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
`;
