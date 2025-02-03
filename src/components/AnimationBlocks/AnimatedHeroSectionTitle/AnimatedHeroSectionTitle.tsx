import { FC } from 'react';
import { Container, Element } from './AnimatedHeroSectionTitle.styled';
import { IProps } from './AnimatedHeroSectionTitle.types';
// ----- components
import HeroSectionTitle from '@MainPageComponents/HeroSectionTitle';

const AnimatedHeroSectionTitle: FC<IProps> = ({ scale }) => {
  return (
    <Container>
      <Element style={{ scale }}>
        <HeroSectionTitle
          firstPart='Cтворюємо надійні'
          secondPart='e-commerce рішення, '
          secondPartAccent='ефективні'
          thirdPart=' та яскраві бренди'
          thirdPartAccent='веб-сайти'
          fourthPart=''
          isHiddenOnMobile
        />
        <HeroSectionTitle
          firstPart='Cтворюємо надійні e-'
          secondPart='commerce рішення,'
          secondPartAccent=''
          thirdPart=''
          thirdPartAccent='ефективні веб-сайти'
          fourthPart='та яскраві бренди'
          isHiddenOnDesk
        />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionTitle;
