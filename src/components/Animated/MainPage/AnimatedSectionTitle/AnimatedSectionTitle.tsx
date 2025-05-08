import { FC, useRef } from 'react';
import { IProps } from './AnimatedSectionTitle.types';
import { Container, Title } from './AnimatedSectionTitle.styled';
import { useInView } from 'framer-motion';

const AnimatedSectionTitle: FC<IProps> = ({
  text,
  isCenter = false,
  isHidden = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    once: true,
    margin: '-300px',
  });
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
    <Container
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      ref={containerRef}
    >
      <Title variants={elementVariants} isCenter={isCenter} isHidden={isHidden}>
        {text}
      </Title>
    </Container>
  );
};

export default AnimatedSectionTitle;
