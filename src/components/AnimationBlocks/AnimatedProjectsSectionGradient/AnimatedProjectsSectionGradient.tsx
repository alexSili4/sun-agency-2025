import { FC } from 'react';
import sectionGradient from '@/images/projects/section-gradient.png';
import SmoothFadeInElement from '@AnimationBlocks/SmoothFadeInElement';
import { SectionGradient } from './AnimatedProjectsSectionGradient.styled';
import { IProps } from './AnimatedProjectsSectionGradient.types';

const AnimatedProjectsSectionGradient: FC<IProps> = ({
  shouldShowGradient,
  projectsSectionGradientRef,
  servicesSectionInView,
}) => {
  return (
    <SmoothFadeInElement
      shouldShow={shouldShowGradient}
      elementRef={projectsSectionGradientRef}
      nextElementInView={servicesSectionInView}
      bottom='-998px'
      left='-414px'
      isPositionAbsolute
    >
      <SectionGradient src={sectionGradient} />
    </SmoothFadeInElement>
  );
};

export default AnimatedProjectsSectionGradient;
