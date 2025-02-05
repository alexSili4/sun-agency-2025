import { FC } from 'react';
import { IProps } from './MenuNavLinksList.types';
import {
  List,
  ListItem,
  StyledLink,
  StyledLinkTitle,
} from './MenuNavLinksList.styled';
// ----- components
import MenuNavLinkGlow from '@GeneralComponents/MenuNavLinkGlow';

const MenuNavLinksList: FC<IProps> = ({ onClick, navLinks }) => {
  return (
    <List>
      {navLinks.map(({ path, title }) => (
        <ListItem key={title}>
          <StyledLink to={path} onClick={onClick}>
            <StyledLinkTitle>{title}</StyledLinkTitle>
            <MenuNavLinkGlow />
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuNavLinksList;
