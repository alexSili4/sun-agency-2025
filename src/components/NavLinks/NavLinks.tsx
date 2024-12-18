import { FC } from 'react';
import { PagePaths, theme } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { Container, LogoLink, MenuBtn } from './NavLinks.styled';
import { FaGripLines } from 'react-icons/fa';

const NavLinks: FC = () => {
  return (
    <Container>
      <LogoLink to={PagePaths.root}>
        <Logo />
      </LogoLink>
      <MenuBtn>
        <FaGripLines size={theme.iconSizes.menuBtn} />
      </MenuBtn>
    </Container>
  );
};

export default NavLinks;
