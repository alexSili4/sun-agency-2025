import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 200px;
  border-radius: 16px;
  height: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    align-self: center;
  }
`;

export const LinkIcon = styled.span`
  flex-shrink: 0;
  position: relative;
  width: 8px;
  aspect-ratio: 1 / 1;
  background-color: #ffcd33;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 8px;
  }
`;

export const LinkTitle = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
`;
