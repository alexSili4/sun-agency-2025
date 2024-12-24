import { FC } from 'react';
import { Container } from './NavMenu.styled';
import Menu from '@GeneralComponents/Menu';
import { IProps } from './NavMenu.types';
import SunLogoLink from '@GeneralComponents/SunLogoLink';

const NavMenu: FC<IProps> = ({ currentLang, onChange }) => {
  return (
    <Container>
      <SunLogoLink />
      <Menu currentLang={currentLang} onChange={onChange} />
    </Container>
  );
};

export default NavMenu;
