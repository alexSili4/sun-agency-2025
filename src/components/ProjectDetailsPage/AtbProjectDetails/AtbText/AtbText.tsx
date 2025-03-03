import { FC } from 'react';
import { Text } from './AtbText.styled';
import { IProps } from './AtbText.types';

const AtbText: FC<IProps> = ({ text }) => {
  return <Text dangerouslySetInnerHTML={{ __html: text }}></Text>;
};

export default AtbText;
