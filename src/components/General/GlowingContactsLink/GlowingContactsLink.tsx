import { PagePaths } from '@/constants';
import { FC } from 'react';
import GlowingContainer from '../GlowingContainer';
import { LinkIcon, LinkTitle, StyledLink } from './GlowingContactsLink.styled';
import { IProps } from './GlowingContactsLink.types';

const GlowingContactsLink: FC<IProps> = ({ width, title }) => {
  return (
    <GlowingContainer borderRadius='16px' zIndex={0}>
      <StyledLink to={PagePaths.contacts} width={width}>
        <LinkIcon></LinkIcon>
        <LinkTitle>{title}</LinkTitle>
      </StyledLink>
    </GlowingContainer>
  );
};

export default GlowingContactsLink;
