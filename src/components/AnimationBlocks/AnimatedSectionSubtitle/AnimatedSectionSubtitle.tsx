import { FC, useRef } from 'react';
import { IProps } from './AnimatedSectionSubtitle.types';
import { Symbols } from '@/constants';
import { getIsLastIndex } from '@/utils';
import { Subtitle, SubtitlePart } from './AnimatedSectionSubtitle.styled';
import { useInView } from 'motion/react';

const AnimatedSectionSubtitle: FC<IProps> = ({ text }) => {
  const subtitleRef = useRef(null);
  const isInView = useInView(subtitleRef, { once: true, margin: '-300px' });
  const subtitleParts = text.split(Symbols.space);
  const lastIndex = subtitleParts.length - 1;

  const subtitleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const subtitlePartsVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Subtitle
      variants={subtitleVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      ref={subtitleRef}
    >
      {subtitleParts.map((part, currentIndex) => {
        const isLastIndex = getIsLastIndex({ currentIndex, lastIndex });
        const text = isLastIndex ? part : `${part} `;

        return (
          <SubtitlePart variants={subtitlePartsVariants} key={currentIndex}>
            {text}
          </SubtitlePart>
        );
      })}
    </Subtitle>
  );
};

export default AnimatedSectionSubtitle;
