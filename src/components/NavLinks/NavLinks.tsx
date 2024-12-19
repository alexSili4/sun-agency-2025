import { FC } from 'react';
import { PagePaths, theme } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { Container, LogoLink, MenuBtn } from './NavLinks.styled';
import { FaGripLines } from 'react-icons/fa';
import GlowingContainer from '@/components/GlowingContainer';

const NavLinks: FC = () => {
  return (
    <Container>
      <LogoLink to={PagePaths.root}>
        <Logo />
      </LogoLink>
      <GlowingContainer borderRadius='50%'>
        <MenuBtn type='button'>
          <FaGripLines size={theme.iconSizes.menuBtn} />
        </MenuBtn>
      </GlowingContainer>
    </Container>
  );
};

export default NavLinks;
