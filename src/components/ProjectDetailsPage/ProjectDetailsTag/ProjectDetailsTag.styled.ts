import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(5)}px`};
`;

export const Marker = styled.div`
  width: 4px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

export const Tag = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;
