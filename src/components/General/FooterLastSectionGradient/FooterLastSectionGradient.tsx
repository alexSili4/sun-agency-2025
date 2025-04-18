import { FC } from 'react';
import { Container } from './FooterLastSectionGradient.styled';
import { IProps } from './FooterLastSectionGradient.types';

const FooterLastSectionGradient: FC<IProps> = ({ startColor }) => {
  return <Container startColor={startColor}></Container>;
};

export default FooterLastSectionGradient;
