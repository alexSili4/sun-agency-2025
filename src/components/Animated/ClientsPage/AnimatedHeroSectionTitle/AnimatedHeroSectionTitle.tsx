import { FC } from 'react';
import {
  Title,
  AnimatedContainer,
  Text,
} from './AnimatedHeroSectionTitle.styled';
import AnimatedHeroSectionTitlePart from '@AnimatedClientsPageComponents/AnimatedHeroSectionTitlePart';
import { IProps } from './AnimatedHeroSectionTitle.types';

const AnimatedHeroSectionTitle: FC<IProps> = ({ animationDuration }) => {
  const strings = ['Будуємо шлях до успіху', 'разом із нашими '];
  const accent = 'клієнтами';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const transition = {
    duration: animationDuration,
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
    <Title>
      <AnimatedContainer
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <Text>
          <AnimatedHeroSectionTitlePart
            elementVariants={elementVariants}
            text={strings[0]}
          />
          <AnimatedHeroSectionTitlePart
            elementVariants={elementVariants}
            text={strings[1]}
            accent={accent}
          />
        </Text>
      </AnimatedContainer>
    </Title>
  );
};

export default AnimatedHeroSectionTitle;
