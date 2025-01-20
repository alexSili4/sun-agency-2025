import { FC } from 'react';
import GlowingContainer from '@GeneralComponents/GlowingContainer';
import { IProps } from './GlowingBtnWrap.types';

const GlowingBtnWrap: FC<IProps> = ({
  children,
  borderRadius,
  isPositionAbsolute,
  right,
  top,
  animationData,
  isSubduedLighting = false,
}) => {
  return (
    <GlowingContainer
      zIndex={0}
      borderRadius={borderRadius}
      isSubduedLighting={isSubduedLighting}
      isPositionAbsolute={isPositionAbsolute}
      right={right}
      top={top}
      animationData={animationData}
    >
      {children}
    </GlowingContainer>
  );
};

export default GlowingBtnWrap;
