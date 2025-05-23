import { FC, useRef } from 'react';
import {
  Symbol,
  Title,
  LineContainer,
} from './AnimatedClientsSectionSubtitle.styled';
import { IProps } from './AnimatedClientsSectionSubtitle.types';
import { useInView } from 'framer-motion';

const AnimatedClientsSectionSubtitle: FC<IProps> = ({
  lines,
  isHiddenOnMobile = false,
}) => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(subtitleRef, {
    once: true,
    margin: '-300px',
  });
  const animate = inView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
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
    <Title ref={subtitleRef} isHiddenOnMobile={isHiddenOnMobile}>
      {lines.map((line, index) => {
        const symbols = Array.from(line);

        return (
          <LineContainer
            variants={containerVariants}
            initial='hidden'
            animate={animate}
            key={index}
          >
            {symbols.map((symbol, index) => (
              <Symbol variants={elementVariants} key={index}>
                {symbol}
              </Symbol>
            ))}
          </LineContainer>
        );
      })}
    </Title>
  );
};

export default AnimatedClientsSectionSubtitle;
