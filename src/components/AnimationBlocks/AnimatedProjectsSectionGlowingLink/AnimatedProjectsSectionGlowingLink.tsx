import { FC } from 'react';
import { PagePaths } from '@/constants';
import GlowingLink from '@GeneralComponents/GlowingLink';
import {
  Container,
  Element,
} from './AnimatedProjectsSectionGlowingLink.styled';
import { IProps } from './AnimatedProjectsSectionGlowingLink.types';

const AnimatedProjectsSectionGlowingLink: FC<IProps> = ({
  nextSectionInView,
}) => {
  const animate = !nextSectionInView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const elementVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Container variants={containerVariants} initial='visible' animate={animate}>
      <Element variants={elementVariants}>
        <GlowingLink
          width={200}
          title='Більше робіт'
          href={PagePaths.projects}
        />
      </Element>
    </Container>
  );
};

export default AnimatedProjectsSectionGlowingLink;
