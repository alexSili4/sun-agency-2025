import { FC, useRef } from 'react';
import ClientsSectionContent from '@ClientsPageComponents/ClientsSectionContent';
import { IProps } from './AnimatedClientsSectionContent.types';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { Container, Element } from './AnimatedClientsSectionContent.styled';

const AnimatedClientsSectionContent: FC<IProps> = ({ clients, filters }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: '-200px 0px 0px -200px' });
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    duration: 2,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants: Variants = {
    hidden: {
      y: '100%',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container
      ref={containerRef}
      animate={animate}
      variants={containerVariants}
      initial='hidden'
    >
      <Element variants={elementVariants}>
        <ClientsSectionContent clients={clients} filters={filters} />
      </Element>
    </Container>
  );
};

export default AnimatedClientsSectionContent;
