import { FC } from 'react';
import { IProps } from './AnimatedOurProcessSectionStepDetailsNumberItem.types';
import {
  Container,
  Element,
  Number,
} from './AnimatedOurProcessSectionStepDetailsNumberItem.styled';
import { AnimatePresence } from 'framer-motion';

const AnimatedOurProcessSectionStepDetailsNumberItem: FC<IProps> = ({
  number,
  variants,
  isShow,
  elementKey,
}) => {
  return (
    <AnimatePresence mode='wait'>
      {isShow && (
        <Container
          key={elementKey}
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <Element>
            <Number>{number}</Number>
          </Element>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default AnimatedOurProcessSectionStepDetailsNumberItem;
