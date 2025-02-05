import { FC } from 'react';
import { Container, Content, LinksWrap } from './MenuModalWin.styled';
import { IProps } from './MenuModalWin.types';
// ----- components
import MenuNavLinksList from '@GeneralComponents/MenuNavLinksList';
import GeneralLinks from '@GeneralComponents/GeneralLinks';
import MenuServicesList from '@GeneralComponents/MenuServicesList';
import HeaderLangsMenu from '@GeneralComponents/HeaderLangsMenu';
import { theme, navLinks, servicesLinks } from '@/constants';

const MenuModalWin: FC<IProps> = ({ onClick, onChange, currentLang }) => {
  return (
    <Container>
      <Content>
        <LinksWrap>
          <MenuServicesList onClick={onClick} servicesLinks={servicesLinks} />
          <MenuNavLinksList onClick={onClick} navLinks={navLinks} />
        </LinksWrap>
        <HeaderLangsMenu
          currentLang={currentLang}
          onChange={onChange}
          top='35px'
          left='156px'
          isFullMenu
          isPositionAbsolute
        />
        <GeneralLinks deskLinkPadding={theme.spacing(17)} />
      </Content>
    </Container>
  );
};

export default MenuModalWin;
