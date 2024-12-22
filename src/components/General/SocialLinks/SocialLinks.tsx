import { FC } from 'react';
import { Links, theme } from '@/constants';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { LinkTitle, List, ListItem, StyledLink } from './SocialLinks.styled';

const SocialLinks: FC = () => {
  return (
    <List>
      <ListItem>
        <StyledLink
          href={Links.linkedin}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedinIn size={theme.iconSizes.socialLink} />
          <LinkTitle>Linkedin</LinkTitle>
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink
          href={Links.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillInstagram size={theme.iconSizes.socialLink} />
          <LinkTitle>Instagram</LinkTitle>
        </StyledLink>
      </ListItem>
    </List>
  );
};

export default SocialLinks;
