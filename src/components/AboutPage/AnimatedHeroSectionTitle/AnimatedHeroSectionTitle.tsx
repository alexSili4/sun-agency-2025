import { FC, useRef } from 'react';
import {
  Container,
  Accent,
  Text,
  TextWrap,
  Title,
  TextPart,
} from './AnimatedHeroSectionTitle.styled';
import { useInView } from 'framer-motion';

const AnimatedEmployeesSectionTitle: FC = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(containerRef);
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
    hidden: { y: '100%', opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container>
      <Title
        ref={containerRef}
        variants={containerVariants}
        initial='hidden'
        animate={animate}
      >
        <TextWrap>
          <Text variants={elementVariants}>
            Ми професійна <Accent>команда </Accent>
          </Text>
        </TextWrap>
        <TextWrap>
          <Text variants={elementVariants}>
            однодумців, які захоплені своєю
            <TextPart isHiddenOnDesk> справою</TextPart>
          </Text>
        </TextWrap>
        <TextWrap isHiddenOnMob>
          <Text variants={elementVariants}>справою</Text>
        </TextWrap>
      </Title>
    </Container>
  );
};

export default AnimatedEmployeesSectionTitle;
