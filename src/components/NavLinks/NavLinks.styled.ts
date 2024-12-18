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

export const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  aspect-ratio: 1 / 1;
  background-color: transparent;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
