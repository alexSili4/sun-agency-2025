import { FC } from 'react';
import {
  Container,
  AccentSymbol,
  AnimatedElement,
} from './AnimatedHeroSectionTitleAccent.styled';
import { IProps } from './AnimatedHeroSectionTitleAccent.types';

const AnimatedHeroSectionTitleAccent: FC<IProps> = ({
  text,
  elementVariants,
}) => {
  const symbols = Array.from(text);

  return (
    <Container>
      {symbols.map((symbol, index) => (
        <AnimatedElement key={index} variants={elementVariants}>
          <AccentSymbol>{symbol}</AccentSymbol>
        </AnimatedElement>
      ))}
    </Container>
  );
};

export default AnimatedHeroSectionTitleAccent;
