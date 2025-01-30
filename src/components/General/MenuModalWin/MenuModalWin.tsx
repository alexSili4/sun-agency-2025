import { FC } from 'react';
import { Container, Content, LinksWrap } from './MenuModalWin.styled';
import { IProps } from './MenuModalWin.types';
// ----- components
import NavLinksList from '@GeneralComponents/NavLinksList';
import GeneralLinks from '@GeneralComponents/GeneralLinks';
import ServicesList from '@GeneralComponents/ServicesList';
import LangsMenu from '@GeneralComponents/LangsMenu';

const MenuModalWin: FC<IProps> = ({ onClick, onChange, currentLang }) => {
  return (
    <Container>
      <Content>
        <LinksWrap>
          <ServicesList onClick={onClick} />
          <NavLinksList onClick={onClick} />
        </LinksWrap>
        <LangsMenu
          currentLang={currentLang}
          onChange={onChange}
          top='35px'
          isFullMenu
          isPositionAbsolute
        />
        <GeneralLinks />
      </Content>
    </Container>
  );
};

export default MenuModalWin;
