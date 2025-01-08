import { FC } from 'react';
import { IProps } from './SectionTitle.types';
import { Title } from './SectionTitle.styled';

const SectionTitle: FC<IProps> = ({
  isHidden = false,
  text,
  isCenter = false,
}) => {
  return (
    <Title isHidden={isHidden} isCenter={isCenter}>
      {text}
    </Title>
  );
};

export default SectionTitle;
