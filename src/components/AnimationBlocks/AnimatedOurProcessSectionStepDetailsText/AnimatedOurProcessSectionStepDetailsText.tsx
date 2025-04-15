import { FC } from 'react';
import AnimatedOurProcessSectionStepDetailsTextItem from '@AnimationBlocks/AnimatedOurProcessSectionStepDetailsTextItem';
import { AnimatePresence } from 'framer-motion';
import { IProps } from './AnimatedOurProcessSectionStepDetailsText.types';

const AnimatedOurProcessSectionStepDetailsText: FC<IProps> = ({
  isShow,
  key,
  text,
  variants,
}) => {
  return (
    <AnimatePresence mode='wait'>
      {isShow && (
        <AnimatedOurProcessSectionStepDetailsTextItem
          key={key}
          text={text}
          variants={variants}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedOurProcessSectionStepDetailsText;
