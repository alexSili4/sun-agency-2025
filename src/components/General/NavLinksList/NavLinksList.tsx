import { FC } from 'react';
import { IProps } from './NavLinksList.types';
import {
  List,
  ListItem,
  StyledLink,
  StyledLinkTitle,
} from './NavLinksList.styled';
import { PagePaths } from '@/constants';
// ----- components
import NavLinkGlow from '@GeneralComponents/NavLinkGlow';

const NavLinksList: FC<IProps> = ({ onClick }) => {
  return (
    <List>
      <ListItem>
        <StyledLink to={PagePaths.projects} onClick={onClick}>
          <StyledLinkTitle>Кейси</StyledLinkTitle>
          <NavLinkGlow />
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={PagePaths.clients} onClick={onClick}>
          <StyledLinkTitle>Клієнти</StyledLinkTitle>
          <NavLinkGlow />
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={PagePaths.about} onClick={onClick}>
          <StyledLinkTitle>Про нас</StyledLinkTitle>
          <NavLinkGlow />
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={PagePaths.contacts} onClick={onClick}>
          <StyledLinkTitle>Контакти</StyledLinkTitle>
          <NavLinkGlow />
        </StyledLink>
      </ListItem>
    </List>
  );
};

export default NavLinksList;
