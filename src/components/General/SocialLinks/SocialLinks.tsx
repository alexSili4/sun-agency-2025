import { FC } from 'react';
import { Links, theme } from '@/constants';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { LinkTitle, List, ListItem, StyledLink } from './SocialLinks.styled';
import { IProps } from './SocialLinks.types';

const SocialLinks: FC<IProps> = ({
  mobileLinkPadding,
  deskLinkPadding,
  isFooter = false,
}) => {
  return (
    <List isFooter={isFooter}>
      <ListItem>
        <StyledLink
          href={Links.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          deskLinkPadding={deskLinkPadding}
          mobileLinkPadding={mobileLinkPadding}
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
          deskLinkPadding={deskLinkPadding}
          mobileLinkPadding={mobileLinkPadding}
        >
          <AiFillInstagram size={theme.iconSizes.socialLink} />
          <LinkTitle>Instagram</LinkTitle>
        </StyledLink>
      </ListItem>
    </List>
  );
};

export default SocialLinks;
