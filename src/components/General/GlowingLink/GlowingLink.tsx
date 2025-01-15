import { FC } from 'react';
import GlowingContainer from '@GeneralComponents/GlowingContainer';
import { LinkIcon, LinkTitle, StyledLink } from './GlowingLink.styled';
import { IProps } from './GlowingLink.types';

const GlowingLink: FC<IProps> = ({
  width,
  title,
  href,
  shouldHide = false,
  isSubduedLighting = false,
}) => {
  return (
    <GlowingContainer
      borderRadius='16px'
      zIndex={0}
      isSubduedLighting={isSubduedLighting}
      shouldHide={shouldHide}
    >
      <StyledLink to={href} width={width}>
        <LinkIcon></LinkIcon>
        <LinkTitle>{title}</LinkTitle>
      </StyledLink>
    </GlowingContainer>
  );
};

export default GlowingLink;
