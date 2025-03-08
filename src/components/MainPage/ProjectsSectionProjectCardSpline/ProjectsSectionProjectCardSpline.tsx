import { FC, useRef } from 'react';
import {
  Container,
  StyledSpline,
  StyledSplineWrap,
} from './ProjectsSectionProjectCardSpline.styled';
import { Scenes } from '@/constants';
import { AnimatePresence, useInView } from 'framer-motion';

const ProjectsSectionProjectCardSpline: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);

  const transition = { duration: 0.3 };

  const initial = { opacity: 0 };

  return (
    <Container ref={containerRef}>
      <AnimatePresence>
        {inView && (
          <StyledSplineWrap
            initial={initial}
            animate={{ opacity: 1, transition }}
            exit={{ ...initial, transition }}
          >
            <StyledSpline scene={Scenes.newProject} />
          </StyledSplineWrap>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ProjectsSectionProjectCardSpline;
