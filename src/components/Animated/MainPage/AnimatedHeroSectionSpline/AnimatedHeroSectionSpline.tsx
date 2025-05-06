import { FC, useRef } from 'react';
import {
  Container,
  StyledSplineWrap,
  StyledSpline,
} from './AnimatedHeroSectionSpline.styled';
import { Scenes } from '@/constants';
import { IProps } from './AnimatedHeroSectionSpline.types';
import { AnimatePresence, useInView } from 'framer-motion';

const AnimatedHeroSectionSpline: FC<IProps> = ({ nextSectionInView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-200px 0px -200px 0px',
  });
  const y = nextSectionInView ? '-100%' : '100%';

  const transition = { duration: 3 };

  const initial = { y, opacity: 0, scale: 0.5 };

  return (
    <Container ref={containerRef}>
      <AnimatePresence>
        {inView && (
          <StyledSplineWrap
            initial={initial}
            animate={{ y: 0, opacity: 1, scale: 1, transition }}
            exit={{ ...initial, transition }}
          >
            <StyledSpline scene={Scenes.donationSection} />
          </StyledSplineWrap>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AnimatedHeroSectionSpline;
