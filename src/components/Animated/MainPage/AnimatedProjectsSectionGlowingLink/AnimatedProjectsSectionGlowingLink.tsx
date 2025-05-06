import { FC } from 'react';
import { PagePaths } from '@/constants';
import {
  Container,
  Element,
} from './AnimatedProjectsSectionGlowingLink.styled';
import { IProps } from './AnimatedProjectsSectionGlowingLink.types';
import glowingLink from '@/lottiefiles/glow/glowing-link.json';
// ----- components
import GlowingLink from '@GeneralComponents/GlowingLink';

const AnimatedProjectsSectionGlowingLink: FC<IProps> = ({
  nextSectionInView,
  isHiddenOnMobile = false,
  isHiddenOnDesk = false,
  isCenter = false,
}) => {
  const animate = !nextSectionInView ? 'visible' : 'hidden';

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
      variants={containerVariants}
      initial='visible'
      animate={animate}
      isHiddenOnMobile={isHiddenOnMobile}
      isHiddenOnDesk={isHiddenOnDesk}
    >
      <Element variants={elementVariants}>
        <GlowingLink
          width={200}
          title='Більше робіт'
          href={PagePaths.projects}
          animationData={glowingLink}
          glowHeight={69}
          glowWidth={214}
          isCenter={isCenter}
        />
      </Element>
    </Container>
  );
};

export default AnimatedProjectsSectionGlowingLink;
