import { FC } from 'react';
import { StyledText } from './Text.styled';
import { IProps } from './Text.types';

const Text: FC<IProps> = ({ text }) => {
  return <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>;
};

export default Text;
