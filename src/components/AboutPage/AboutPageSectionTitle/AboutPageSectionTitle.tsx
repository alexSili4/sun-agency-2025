import { FC } from 'react';
import { IProps } from './AboutPageSectionTitle.types';
import { Title } from './AboutPageSectionTitle.styled';

const AboutPageSectionTitle: FC<IProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default AboutPageSectionTitle;
