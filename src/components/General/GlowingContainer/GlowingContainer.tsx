import { FC } from 'react';
import { IProps } from './GlowingContainer.types';
import { Backdrop, Container } from './GlowingContainer.styled';

const GlowingContainer: FC<IProps> = ({
  children,
  borderRadius,
  zIndex,
  shouldHide = false,
  isSubduedLighting = false,
}) => {
  return (
    <Container zIndex={zIndex} shouldHide={shouldHide}>
      <Backdrop
        borderRadius={borderRadius}
        isSubduedLighting={isSubduedLighting}
      ></Backdrop>
      {children}
    </Container>
  );
};

export default GlowingContainer;
