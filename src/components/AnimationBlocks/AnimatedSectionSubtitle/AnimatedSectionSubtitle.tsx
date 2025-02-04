import { FC, useRef } from 'react';
import { IProps } from './AnimatedSectionSubtitle.types';
import { Symbols } from '@/constants';
import { getIsLastIndex } from '@/utils';
import { Subtitle, SubtitlePart } from './AnimatedSectionSubtitle.styled';
import { useInView } from 'framer-motion';

const AnimatedSectionSubtitle: FC<IProps> = ({
  text,
  isHiddenOnDesk = false,
  isCenter = false,
}) => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(subtitleRef, {
    once: true,
    margin: '-300px',
  });
  const subtitleParts = text.split(Symbols.space);
  const lastIndex = subtitleParts.length - 1;
  const animate = inView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { y: 50, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Subtitle
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      ref={subtitleRef}
      isHiddenOnDesk={isHiddenOnDesk}
      isCenter={isCenter}
    >
      {subtitleParts.map((part, currentIndex) => {
        const isLastIndex = getIsLastIndex({ currentIndex, lastIndex });
        const text = isLastIndex ? part : `${part} `;

        return (
          <SubtitlePart variants={elementVariants} key={currentIndex}>
            {text}
          </SubtitlePart>
        );
      })}
    </Subtitle>
  );
};

export default AnimatedSectionSubtitle;
