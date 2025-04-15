import { FC } from 'react';
import { IProps } from './AnimatedOurProcessSectionStepDetailsTextItem.types';
import {
  Container,
  Text,
  Element,
} from './AnimatedOurProcessSectionStepDetailsTextItem.styled';

const AnimatedOurProcessSectionStepDetailsTextItem: FC<IProps> = ({
  text,
  variants,
}) => {
  return (
    <Container
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Element>
        <Text>{text}</Text>
      </Element>
    </Container>
  );
};

export default AnimatedOurProcessSectionStepDetailsTextItem;
