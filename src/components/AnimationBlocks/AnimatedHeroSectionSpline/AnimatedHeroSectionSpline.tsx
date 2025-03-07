import { FC, useRef } from 'react';
import {
  Container,
  Element,
  StyledSpline,
} from './AnimatedHeroSectionSpline.styled';
import { Scenes } from '@/constants';
import { IProps } from './AnimatedHeroSectionSpline.types';
import { AnimatePresence, useInView } from 'framer-motion';

const AnimatedHeroSectionSpline: FC<IProps> = ({ nextSectionInView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  // const y = nextSectionInView ? '-100%' : '100%';

  // const animate = !nextSectionInView ? 'visible' : 'hidden';

  // const containerVariants = {
  //   hidden: {},
  //   visible: {},
  // };

const transition = { duration: 0.3 };

  // const elementVariants = {
  //   hidden: { y, opacity: 0, scale: 0.5, transition },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     scale: 1,
  //     transition,
  //   },
  // };

  return (
    <Container ref={containerRef}>
      <AnimatePresence>
        {inView && (
          <StyledSplineWrap
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1, transition }}
          // exit={{ opacity: 0, transition }}
          >
            <StyledSpline scene={Scenes.donationSection} />
          </StyledSplineWrap>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AnimatedHeroSectionSpline;
