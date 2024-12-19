import { FC } from 'react';
import { IProps } from './GlowingContainer.types';
import { Backdrop, Container } from './GlowingContainer.styled';

const GlowingContainer: FC<IProps> = ({ children, borderRadius, zIndex }) => {
  return (
    <Container zIndex={zIndex}>
      <Backdrop borderRadius={borderRadius}></Backdrop>
      {children}
    </Container>
  );
};

export default GlowingContainer;
