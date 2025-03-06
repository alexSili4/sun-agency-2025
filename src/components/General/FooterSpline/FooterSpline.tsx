import { Scenes } from '@/constants';
import { FC, useRef } from 'react';
import {
  Container,
  StyledSpline,
  StyledSplineWrap,
} from './FooterSpline.styled';
import { AnimatePresence, useInView } from 'framer-motion';

const FooterSpline: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);

  const transition = { duration: 0.3 };

  return (
    <Container ref={containerRef}>
      <AnimatePresence>
        {inView && (
          <StyledSplineWrap
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition }}
            exit={{ opacity: 0, transition }}
          >
            <StyledSpline scene={Scenes.footer} />
          </StyledSplineWrap>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default FooterSpline;
