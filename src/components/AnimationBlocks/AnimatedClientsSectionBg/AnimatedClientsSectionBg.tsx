import { FC } from 'react';
import sectionBg from '@/images/clients/section-bg.jpg';
import SmoothFadeDownElement from '@AnimationBlocks/SmoothFadeDownElement';
import { Image } from './AnimatedClientsSectionBg.styled';
import { IProps } from './AnimatedClientsSectionBg.types';

const AnimatedClientsSectionBg: FC<IProps> = ({
  shouldShowSectionBg,
  sectionBgRef,
}) => {
  return (
    <SmoothFadeDownElement
      shouldShow={shouldShowSectionBg}
      elementRef={sectionBgRef}
      bottom='0px'
      left='0px'
      isPositionAbsolute
    >
      <Image src={sectionBg} />
    </SmoothFadeDownElement>
  );
};

export default AnimatedClientsSectionBg;
