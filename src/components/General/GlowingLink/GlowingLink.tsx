import { FC } from 'react';
import { LinkIcon, LinkTitle, StyledLink } from './GlowingLink.styled';
import { IProps } from './GlowingLink.types';
import { useIsHoverOrFocus } from '@/hooks';
// ----- components
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';

const GlowingLink: FC<IProps> = ({
  width,
  title,
  href,
  animationData,
  glowHeight,
  glowWidth,
  loop = false,
  isHidden = false,
}) => {
  const { isHoverOrFocus, onItemBlur, onItemFocus } = useIsHoverOrFocus();

  return (
    <StyledLink
      to={href}
      width={width}
      onBlur={onItemBlur}
      onFocus={onItemFocus}
      onMouseEnter={onItemFocus}
      onMouseLeave={onItemBlur}
      isHidden={isHidden}
    >
      <LottieGlowingAnimation
        animationData={animationData}
        isHoverOrFocus={isHoverOrFocus}
        height={glowHeight}
        width={glowWidth}
        loop={loop}
      />
      <LinkIcon></LinkIcon>
      <LinkTitle>{title}</LinkTitle>
    </StyledLink>
  );
};

export default GlowingLink;
