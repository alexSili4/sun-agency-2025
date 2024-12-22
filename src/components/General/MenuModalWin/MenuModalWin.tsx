import { FC } from 'react';
import { Container, Content, LinksWrap } from './MenuModalWin.styled';
import ServicesList from '@GeneralComponents/ServicesList';
import { IProps } from './MenuModalWin.types';
import NavLinksList from '@GeneralComponents/NavLinksList';
import GeneralLinks from '@GeneralComponents/GeneralLinks';
import LangsMenu from '@GeneralComponents/LangsMenu';

const MenuModalWin: FC<IProps> = ({ onClick, onChange, currentLang }) => {
  return (
    <Container>
      <LangsMenu
        currentLang={currentLang}
        onChange={onChange}
        top='35px'
        isFullMenu
        isPositionAbsolute
      />
      <Content>
        <LinksWrap>
          <ServicesList onClick={onClick} />
          <NavLinksList onClick={onClick} />
        </LinksWrap>
        <GeneralLinks />
      </Content>
    </Container>
  );
};

export default MenuModalWin;
