import { PagePaths } from '@/constants';
import { FC } from 'react';
import { List, ListItem, StyledLink } from './FooterNavLinks.styled';

const FooterNavLinks: FC = () => {
  return (
    <List>
      <ListItem>
        <StyledLink to={PagePaths.projects}>Кейси</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={PagePaths.services}>Послуги</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={PagePaths.clients}>Клієнти</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={PagePaths.about}>Про нас</StyledLink>
      </ListItem>
    </List>
  );
};

export default FooterNavLinks;
