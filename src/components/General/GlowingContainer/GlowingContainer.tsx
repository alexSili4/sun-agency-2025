import { FC } from 'react';
import { IProps } from './GlowingContainer.types';
import { Backdrop, Container } from './GlowingContainer.styled';

const GlowingContainer: FC<IProps> = ({
  children,
  borderRadius,
  zIndex,
  shouldHide = false,
  isSubduedLighting = false,
  isPositionAbsolute = false,
  top = '0px',
  right = '0px',
}) => {
  return (
    <Container
      zIndex={zIndex}
      shouldHide={shouldHide}
      isPositionAbsolute={isPositionAbsolute}
      right={right}
      top={top}
    >
      <Backdrop
        borderRadius={borderRadius}
        isSubduedLighting={isSubduedLighting}
      ></Backdrop>
      {children}
    </Container>
  );
};

export default GlowingContainer;
