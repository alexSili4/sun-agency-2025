import { FC } from 'react';
import { Container, ItemWrap } from './AnimatedClientsSectionContent.styled';
import { IProps } from './AnimatedClientsSectionContent.types';
// ----- components
import ClientsSectionContent from '@MainPageComponents/ClientsSectionContent';

const AnimatedClientsSectionContent: FC<IProps> = ({ shouldShow }) => {
  const animate = shouldShow ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const itemVariants = {
    hidden: {
      y: '-100%',
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
    <Container variants={containerVariants} initial='hidden' animate={animate}>
      <ItemWrap variants={itemVariants}>
        <ClientsSectionContent />
      </ItemWrap>
    </Container>
  );
};

export default AnimatedClientsSectionContent;
