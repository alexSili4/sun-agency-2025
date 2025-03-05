import { FC } from 'react';
import { LinkIcon, LinkTitle, StyledLink } from './GlowingLink.styled';
import { IProps } from './GlowingLink.types';
import { useIsHoverOrFocus } from '@/hooks';
import glowingLink from '@/lottiefiles/glow/glowing-link.json';
// ----- components
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';

const GlowingLink: FC<IProps> = ({ title, href }) => {
  const { isHoverOrFocus, onItemBlur, onItemFocus } = useIsHoverOrFocus();

  return (
    <StyledLink
      to={href}
      onBlur={onItemBlur}
      onFocus={onItemFocus}
      onMouseEnter={onItemFocus}
      onMouseLeave={onItemBlur}
    >
      <LottieGlowingAnimation
        animationData={glowingLink}
        isHoverOrFocus={isHoverOrFocus}
        height={69}
        width={214}
      />
      <LinkIcon></LinkIcon>
      <LinkTitle>{title}</LinkTitle>
    </StyledLink>
  );
};

export default GlowingLink;
