import { FC } from 'react';
import sectionBg from '@/images/projects/section-bg.png';
import SmoothFadeInElement from '@AnimationBlocks/SmoothFadeInElement';
import { Image } from './AnimatedProjectsSectionBg.styled';
import { IProps } from './AnimatedProjectsSectionBg.types';

const AnimatedProjectsSectionBg: FC<IProps> = ({
  shouldShowSectionBg,
  inView,
  sectionBgRef,
}) => {
  return (
    <SmoothFadeInElement
      shouldShow={shouldShowSectionBg}
      elementRef={sectionBgRef}
      nextElementInView={inView}
      bottom='-998px'
      left='-414px'
      isPositionAbsolute
    >
      <Image src={sectionBg} />
    </SmoothFadeInElement>
  );
};

export default AnimatedProjectsSectionBg;
