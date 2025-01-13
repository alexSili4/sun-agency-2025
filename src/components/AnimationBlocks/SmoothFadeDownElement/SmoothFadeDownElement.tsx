import { FC } from 'react';
import { Container, ElementWrap } from './SmoothFadeDownElement.styled';
import { IProps } from './SmoothFadeDownElement.types';
import { framerMotionVariants } from '@/constants';

const SmoothFadeDownElement: FC<IProps> = ({
  children,
  shouldShow,
  elementRef,
  isPositionAbsolute,
  bottom,
  left,
}) => {
  const animate = shouldShow ? 'visible' : 'hidden';

  return (
    <Container
      ref={elementRef}
      variants={framerMotionVariants.linearAnimationContainerVariants}
      initial='hidden'
      animate={animate}
      isPositionAbsolute={isPositionAbsolute}
      bottom={bottom}
      left={left}
    >
      <ElementWrap
        variants={framerMotionVariants.largeMovementAnimationVariants}
      >
        {children}
      </ElementWrap>
    </Container>
  );
};

export default SmoothFadeDownElement;
