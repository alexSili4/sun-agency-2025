import { FC } from 'react';
import { IProps } from './AnimatedOurProcessSectionStepDetailsTextItem.types';
import {
  Container,
  Text,
  Element,
  TextWrap,
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
        <TextWrap>
          <Text>{text}</Text>
        </TextWrap>
      </Element>
    </Container>
  );
};

export default AnimatedOurProcessSectionStepDetailsTextItem;
