import { FC } from 'react';
import { IProps } from './GeneralContainer.types';
import { Container } from './GeneralContainer.styled';

const GeneralContainer: FC<IProps> = ({ children, isFullHeight = false }) => {
  return <Container isFullHeight={isFullHeight}>{children}</Container>;
};

export default GeneralContainer;
