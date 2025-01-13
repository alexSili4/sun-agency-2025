import { FC, useRef } from 'react';
import {
  Symbol,
  Title,
  LineContainer,
} from './AnimatedMultiLineSubtitle.styled';
import { IProps } from './AnimatedMultiLineSubtitle.types';
import { useInView } from 'framer-motion';
import { framerMotionVariants } from '@/constants';

const AnimatedMultiLineSubtitle: FC<IProps> = ({ lines }) => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(subtitleRef, {
    once: true,
    margin: '-300px',
  });
  const animate = inView ? 'visible' : 'hidden';

  return (
    <Title ref={subtitleRef}>
      {lines.map((line, index) => {
        const symbols = Array.from(line);

        return (
          <LineContainer
            variants={framerMotionVariants.fastAnimationContainerVariants}
            initial='hidden'
            animate={animate}
            key={index}
          >
            {symbols.map((symbol, index) => (
              <Symbol
                variants={framerMotionVariants.smallMovementAnimationVariants}
                key={index}
              >
                {symbol}
              </Symbol>
            ))}
          </LineContainer>
        );
      })}
    </Title>
  );
};

export default AnimatedMultiLineSubtitle;
