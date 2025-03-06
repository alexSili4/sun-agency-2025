import { FC, useRef } from 'react';
import {
  Container,
  Subtitle,
  TextWrap,
  Title,
} from './AnimatedEmployeesSectionTitle.styled';
import { useInView } from 'framer-motion';

const AnimatedEmployeesSectionTitle: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-100px 0px -200px 0px',
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

  const topElementVariants = {
    hidden: { y: '-100%', opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  const bottomElementVariants = {
    hidden: { y: '100%', opacity: 0, transition },
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
      initial='hidden'
      animate={animate}
    >
      <TextWrap>
        <Title variants={topElementVariants}>Команда</Title>
      </TextWrap>
      <TextWrap>
        <Subtitle variants={bottomElementVariants}>
          Ми переконані, що команда з різноманітними навичками та світоглядом
          дозволяє нам створювати проєкти з багатогранним підходом
        </Subtitle>
      </TextWrap>
    </Container>
  );
};

export default AnimatedEmployeesSectionTitle;
