import { FC } from 'react';
import { IProps } from './SectionTitle.types';
import { Title } from './SectionTitle.styled';

const SectionTitle: FC<IProps> = ({ isHidden = false, text }) => {
  return <Title isHidden={isHidden}>{text}</Title>;
};

export default SectionTitle;
