import { FC } from 'react';
import { LinkIcon, LinkTitle, StyledLink } from './GlowingLink.styled';
import { IProps } from './GlowingLink.types';
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';
import { useIsHoverOrFocus } from '@/hooks';

const GlowingLink: FC<IProps> = ({
  width,
  title,
  href,
  animationData,
  glowHeight,
  glowWidth,
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
    >
      <LottieGlowingAnimation
        animationData={animationData}
        isHoverOrFocus={isHoverOrFocus}
        height={glowHeight}
        width={glowWidth}
      />
      <LinkIcon></LinkIcon>
      <LinkTitle>{title}</LinkTitle>
    </StyledLink>
  );
};

export default GlowingLink;
