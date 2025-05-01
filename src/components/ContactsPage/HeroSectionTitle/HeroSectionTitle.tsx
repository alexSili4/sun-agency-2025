import { FC } from 'react';
import { Container } from './HeroSectionTitle.styled';
import AnimatedHeroSectionTitle from '@AnimatedContactsPageComponents/AnimatedHeroSectionTitle';
import AnimatedHeroSectionSubtitle from '@AnimatedContactsPageComponents/AnimatedHeroSectionSubtitle';
import { IProps } from './HeroSectionTitle.types';

const HeroSectionTitle: FC<IProps> = ({ animationDuration }) => {
  return (
    <Container>
      <AnimatedHeroSectionTitle animationDuration={animationDuration} />
      <AnimatedHeroSectionSubtitle animationDuration={animationDuration} />
    </Container>
  );
};

export default HeroSectionTitle;
