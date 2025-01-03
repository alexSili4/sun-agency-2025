import { PagePaths } from '@/constants';
import { FC } from 'react';
import GlowingContainer from '../GlowingContainer';
import { LinkIcon, LinkTitle, StyledLink } from './GlowingLink.styled';
import { IProps } from './GlowingLink.types';

const GlowingLink: FC<IProps> = ({
  width,
  title,
  isSubduedLighting = false,
}) => {
  return (
    <GlowingContainer
      borderRadius='16px'
      zIndex={0}
      isSubduedLighting={isSubduedLighting}
    >
      <StyledLink to={PagePaths.contacts} width={width}>
        <LinkIcon></LinkIcon>
        <LinkTitle>{title}</LinkTitle>
      </StyledLink>
    </GlowingContainer>
  );
};

export default GlowingLink;
