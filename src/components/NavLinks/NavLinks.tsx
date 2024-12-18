import { FC } from 'react';
import { PagePaths, theme } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { Container, LogoLink, MenuBtn } from './NavLinks.styled';
import { FaGripLines } from 'react-icons/fa';
import ShimmerWrap from '@/components/ShimmerWrap';

const NavLinks: FC = () => {
  return (
    <Container>
      <LogoLink to={PagePaths.root}>
        <Logo />
      </LogoLink>
      <ShimmerWrap rounded={50} width={62}>
        <MenuBtn type='button'>
          <FaGripLines size={theme.iconSizes.menuBtn} />
        </MenuBtn>
      </ShimmerWrap>
    </Container>
  );
};

export default NavLinks;
