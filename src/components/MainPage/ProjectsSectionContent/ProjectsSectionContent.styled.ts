import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;
