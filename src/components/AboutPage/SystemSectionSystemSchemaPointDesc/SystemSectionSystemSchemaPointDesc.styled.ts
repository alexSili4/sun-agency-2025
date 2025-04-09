import styled from '@emotion/styled';

export const Container = styled.span`
  display: block;
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

export const TextWrap = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;
  background-color: #161616;
  border-radius: inherit;
  padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(5)}px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(8)}px ${spacing(6)}px`};
  }
`;

export const Marker = styled.span`
  flex-shrink: 0;
  width: 4px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
`;
