import { FC, useRef } from 'react';
import { IProps } from './AnimatedReviewsSlider.types';
import { Container, Element } from './AnimatedReviewsSlider.styled';
import { useInView } from 'framer-motion';
// ----- components
import ReviewsSlider from '@MainPageComponents/ReviewsSlider';

const AnimatedReviewsSlider: FC<IProps> = ({ reviews }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-300px',
  });
  const animate = inView ? 'visible' : 'hidden';
  const containerVariants = {
    hidden: {},
    visible: {},
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
      ref={containerRef}
      variants={containerVariants}
      initial='visible'
      animate={animate}
    >
      <Element variants={elementVariants}>
        <ReviewsSlider reviews={reviews} slideWidth={553} gap={16} />
      </Element>
    </Container>
  );
};

export default AnimatedReviewsSlider;
