import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(132)};
`;

export const LogoLink = styled(Link)`
  & > svg {
    display: block;
    width: 121px;
    height: 25px;
  }
`;
