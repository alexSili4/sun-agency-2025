import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;
