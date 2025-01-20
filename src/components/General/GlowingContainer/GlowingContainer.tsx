import { FC } from 'react';
import { IProps } from './GlowingContainer.types';
import { Container } from './GlowingContainer.styled';

const GlowingContainer: FC<IProps> = ({
  children,
  zIndex,
  shouldHide = false,
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
      {/* <Backdrop
        borderRadius={borderRadius}
        isSubduedLighting={isSubduedLighting}
      ></Backdrop> */}
      {children}
    </Container>
  );
};

export default GlowingContainer;
