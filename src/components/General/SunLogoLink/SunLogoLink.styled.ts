import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledLogoLinkProps } from './SunLogoLink.types';

export const LogoLink = styled(Link)<IStyledLogoLinkProps>`
  opacity: ${({ showMenuModalWin }) => (showMenuModalWin ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    display: block;
    width: 86px;
    height: ${({ isFooter }) => (isFooter ? 22 : 18)}px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 121px;
      height: 25px;
    }
  }
`;
