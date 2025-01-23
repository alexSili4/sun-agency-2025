import { FC } from 'react';
import { Container, ElementWrap } from './SmoothFadeDownElement.styled';
import { IProps } from './SmoothFadeDownElement.types';

const SmoothFadeDownElement: FC<IProps> = ({
  children,
  shouldShow,
  elementRef,
  isPositionAbsolute,
  bottom,
  left,
}) => {
  const animate = shouldShow ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: {
      y: 200,
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container
      ref={elementRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      isPositionAbsolute={isPositionAbsolute}
      bottom={bottom}
      left={left}
    >
      <ElementWrap variants={elementVariants}>{children}</ElementWrap>
    </Container>
  );
};

export default SmoothFadeDownElement;
