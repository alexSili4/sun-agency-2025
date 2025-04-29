import { FC } from 'react';
import { IProps } from './AnimatedHeroSectionTitlePart.types';
import {
  AnimatedElement,
  Container,
  TextLineSymbol,
} from './AnimatedHeroSectionTitlePart.styled';
import AnimatedHeroSectionTitleAccent from '@AnimatedContactsPageComponents/AnimatedHeroSectionTitleAccent';

const AnimatedHeroSectionTitlePart: FC<IProps> = ({
  text,
  elementVariants,
  accent,
}) => {
  const symbols = Array.from(text);

  return (
    <Container>
      {symbols.map((symbol, index) => (
        <AnimatedElement key={index} variants={elementVariants}>
          <TextLineSymbol>{symbol}</TextLineSymbol>
        </AnimatedElement>
      ))}
      {accent && (
        <AnimatedHeroSectionTitleAccent
          elementVariants={elementVariants}
          text={accent}
        />
      )}
    </Container>
  );
};

export default AnimatedHeroSectionTitlePart;
