import { FC } from 'react';
import { Text } from './AtbText.styled';
import { IProps } from './AtbText.types';

const AtbText: FC<IProps> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default AtbText;
