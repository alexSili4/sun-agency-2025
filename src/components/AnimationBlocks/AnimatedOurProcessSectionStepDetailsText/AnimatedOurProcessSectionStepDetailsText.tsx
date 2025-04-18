import { FC } from 'react';
import AnimatedOurProcessSectionStepDetailsTextItem from '@AnimationBlocks/AnimatedOurProcessSectionStepDetailsTextItem';
import { AnimatePresence } from 'framer-motion';
import { IProps } from './AnimatedOurProcessSectionStepDetailsText.types';
import { Container } from './AnimatedOurProcessSectionStepDetailsText.styled';

const AnimatedOurProcessSectionStepDetailsText: FC<IProps> = ({
  isShow,
  elementKey,
  text,
  variants,
}) => {
  return (
    <Container>
      <AnimatePresence mode='wait'>
        {isShow && (
          <AnimatedOurProcessSectionStepDetailsTextItem
            key={elementKey}
            text={text}
            variants={variants}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AnimatedOurProcessSectionStepDetailsText;
