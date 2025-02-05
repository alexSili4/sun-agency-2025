import { FC } from 'react';
import { List, ListItem, StyledLink } from './FooterNavLinks.styled';
import { IProps } from './FooterNavLinks.types';

const FooterNavLinks: FC<IProps> = ({ navLinks }) => {
  return (
    <List>
      {navLinks.map(({ path, title }) => (
        <ListItem key={title}>
          <StyledLink to={path}>{title}</StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

export default FooterNavLinks;
