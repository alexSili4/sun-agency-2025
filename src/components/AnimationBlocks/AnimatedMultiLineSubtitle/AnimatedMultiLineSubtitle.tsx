import { FC, useRef } from 'react';
import {
  Symbol,
  Title,
  LineContainer,
} from './AnimatedMultiLineSubtitle.styled';
import { IProps } from './AnimatedMultiLineSubtitle.types';
import { useInView } from 'motion/react';

const AnimatedMultiLineSubtitle: FC<IProps> = ({ lines }) => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(subtitleRef, {
    once: true,
    margin: '-300px',
  });
  const animate = isInView ? 'visible' : 'hidden';
  const lineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const symbolVariants = {
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
    <Title ref={subtitleRef}>
      {lines.map((line) => {
        const symbols = Array.from(line);

        return (
          <LineContainer
            variants={lineVariants}
            initial='hidden'
            animate={animate}
          >
            {symbols.map((symbol, index) => (
              <Symbol variants={symbolVariants} key={index}>
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
