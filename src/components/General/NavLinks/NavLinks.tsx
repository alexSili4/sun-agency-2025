import { FC } from 'react';
import { PagePaths } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { Container, LogoLink } from './NavLinks.styled';
import Menu from '@GeneralComponents/Menu';
import { IProps } from './NavLinks.types';

const NavLinks: FC<IProps> = ({ currentLang, onChange }) => {
  return (
    <Container>
      <LogoLink to={PagePaths.root}>
        <Logo />
      </LogoLink>
      <Menu currentLang={currentLang} onChange={onChange} />
    </Container>
  );
};

export default NavLinks;
