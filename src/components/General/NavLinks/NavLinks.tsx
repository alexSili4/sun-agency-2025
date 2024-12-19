import { FC } from 'react';
import { PagePaths } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { Container, LogoLink } from './NavLinks.styled';
import Menu from '@GeneralComponents/Menu';

const NavLinks: FC = () => {
  return (
    <Container>
      <LogoLink to={PagePaths.root}>
        <Logo />
      </LogoLink>
      <Menu />
    </Container>
  );
};

export default NavLinks;
