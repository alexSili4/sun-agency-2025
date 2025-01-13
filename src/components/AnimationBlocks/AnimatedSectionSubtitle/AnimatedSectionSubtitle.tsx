import { FC, useRef } from 'react';
import { IProps } from './AnimatedSectionSubtitle.types';
import { framerMotionVariants, Symbols } from '@/constants';
import { getIsLastIndex } from '@/utils';
import { Subtitle, SubtitlePart } from './AnimatedSectionSubtitle.styled';
import { useInView } from 'framer-motion';

const AnimatedSectionSubtitle: FC<IProps> = ({ text }) => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(subtitleRef, {
    once: true,
    margin: '-300px',
  });
  const subtitleParts = text.split(Symbols.space);
  const lastIndex = subtitleParts.length - 1;
  const animate = inView ? 'visible' : 'hidden';

  return (
    <Subtitle
      variants={framerMotionVariants.slowAnimationContainerVariants}
      initial='hidden'
      animate={animate}
      ref={subtitleRef}
    >
      {subtitleParts.map((part, currentIndex) => {
        const isLastIndex = getIsLastIndex({ currentIndex, lastIndex });
        const text = isLastIndex ? part : `${part} `;

        return (
          <SubtitlePart
            variants={framerMotionVariants.smallMovementAnimationVariants}
            key={currentIndex}
          >
            {text}
          </SubtitlePart>
        );
      })}
    </Subtitle>
  );
};

export default AnimatedSectionSubtitle;
