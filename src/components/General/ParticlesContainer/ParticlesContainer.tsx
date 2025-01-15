import { FC } from 'react';
import { Container } from './ParticlesContainer.styled';
import { IProps } from './ParticlesContainer.types';
import ParticlesItem from '@GeneralComponents/ParticlesItem';

const ParticlesContainer: FC<IProps> = ({ children }) => {
  return (
    <Container>
      {children}
      <ParticlesItem />
    </Container>
  );
};

export default ParticlesContainer;
