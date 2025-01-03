import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing(8)} ${spacing(12)}`};
`;
