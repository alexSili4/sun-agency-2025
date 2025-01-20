import { FC, useRef } from 'react';
import { IProps } from './AnimatedSectionTitle.types';
import { framerMotionVariants } from '@/constants';
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

  return (
    <Container
      variants={framerMotionVariants.slowAnimationContainerVariants}
      initial='hidden'
      animate={animate}
      ref={containerRef}
    >
      <Title
        variants={framerMotionVariants.smallMovementAnimationVariants}
        isCenter={isCenter}
        isHidden={isHidden}
      >
        {text}
      </Title>
    </Container>
  );
};

export default AnimatedSectionTitle;
