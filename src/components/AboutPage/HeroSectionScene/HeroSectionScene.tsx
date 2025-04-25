import { FC } from 'react';
import scene from '@/images/about/hero/scene.png';
import { Container, Image } from './HeroSectionScene.styled';
import { IProps } from './HeroSectionScene.types';

const HeroSectionScene: FC<IProps> = ({
  rotate,
  translateY,
  translateX,
  scale,
}) => {
  return (
    <Container
      rotate={rotate}
      scale={scale}
      translateX={translateX}
      translateY={translateY}
    >
      <Image src={scene} alt='' />
    </Container>
  );
};

export default HeroSectionScene;
