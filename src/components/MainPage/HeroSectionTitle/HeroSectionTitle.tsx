import { FC } from 'react';
import {
  Accent,
  Symbol,
  Title,
  TitlePart,
  TitlePartContainer,
} from './HeroSectionTitle.styled';
import { framerMotionVariants } from '@/constants';

const HeroSectionTitle: FC = () => {
  const firstPart = 'Cтворюємо надійні';
  const secondPart = 'e-commerce рішення, ';
  const secondPartAccent = 'ефективні';
  const thirdPart = ' та яскраві бренди';
  const thirdPartAccent = 'веб-сайти';

  const firstPartSymbols = Array.from(firstPart);
  const secondPartSymbols = Array.from(secondPart);
  const secondPartAccentSymbols = Array.from(secondPartAccent);
  const thirdPartSymbols = Array.from(thirdPart);
  const thirdPartAccentSymbols = Array.from(thirdPartAccent);

  return (
    <Title>
      <TitlePartContainer
        variants={framerMotionVariants.fastAnimationContainerVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          {firstPartSymbols.map((symbol, index) => (
            <Symbol
              variants={framerMotionVariants.smallMovementAnimationVariants}
              key={index}
            >
              {symbol}
            </Symbol>
          ))}
        </TitlePart>
      </TitlePartContainer>
      <TitlePartContainer
        variants={framerMotionVariants.fastAnimationContainerVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          {secondPartSymbols.map((symbol, index) => (
            <Symbol
              variants={framerMotionVariants.smallMovementAnimationVariants}
              key={index}
            >
              {symbol}
            </Symbol>
          ))}
          <Accent>
            {secondPartAccentSymbols.map((symbol, index) => (
              <Symbol
                variants={framerMotionVariants.smallMovementAnimationVariants}
                key={index}
              >
                {symbol}
              </Symbol>
            ))}
          </Accent>
        </TitlePart>
      </TitlePartContainer>
      <TitlePartContainer
        variants={framerMotionVariants.fastAnimationContainerVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          <Accent>
            {thirdPartAccentSymbols.map((symbol, index) => (
              <Symbol
                variants={framerMotionVariants.smallMovementAnimationVariants}
                key={index}
              >
                {symbol}
              </Symbol>
            ))}
          </Accent>
          {thirdPartSymbols.map((symbol, index) => (
            <Symbol
              variants={framerMotionVariants.smallMovementAnimationVariants}
              key={index}
            >
              {symbol}
            </Symbol>
          ))}
        </TitlePart>
      </TitlePartContainer>
    </Title>
  );
};

export default HeroSectionTitle;
