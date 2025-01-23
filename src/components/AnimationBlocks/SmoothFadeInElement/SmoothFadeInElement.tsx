import { FC } from 'react';
import { Container, ElementWrap } from './SmoothFadeInElement.styled';
import { IProps } from './SmoothFadeInElement.types';

const SmoothFadeInElement: FC<IProps> = ({
  children,
  shouldShow,
  elementRef,
  nextElementInView,
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

  const reversibleElementVariants = {
    hidden: {
      y: nextElementInView ? -200 : 200,
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
      <ElementWrap variants={reversibleElementVariants}>{children}</ElementWrap>
    </Container>
  );
};

export default SmoothFadeInElement;
