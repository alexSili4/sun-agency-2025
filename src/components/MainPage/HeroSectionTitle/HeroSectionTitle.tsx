import { FC } from 'react';
import {
  Accent,
  Symbol,
  Title,
  TitlePart,
  TitlePartContainer,
} from './HeroSectionTitle.styled';

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const transition = {
    duration: 0.6,
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
      <TitlePartContainer
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          {firstPartSymbols.map((symbol, index) => (
            <Symbol variants={elementVariants} key={index}>
              {symbol}
            </Symbol>
          ))}
        </TitlePart>
      </TitlePartContainer>
      <TitlePartContainer
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          {secondPartSymbols.map((symbol, index) => (
            <Symbol variants={elementVariants} key={index}>
              {symbol}
            </Symbol>
          ))}
          <Accent>
            {secondPartAccentSymbols.map((symbol, index) => (
              <Symbol variants={elementVariants} key={index}>
                {symbol}
              </Symbol>
            ))}
          </Accent>
        </TitlePart>
      </TitlePartContainer>
      <TitlePartContainer
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          <Accent>
            {thirdPartAccentSymbols.map((symbol, index) => (
              <Symbol variants={elementVariants} key={index}>
                {symbol}
              </Symbol>
            ))}
          </Accent>
          {thirdPartSymbols.map((symbol, index) => (
            <Symbol variants={elementVariants} key={index}>
              {symbol}
            </Symbol>
          ))}
        </TitlePart>
      </TitlePartContainer>
    </Title>
  );
};

export default HeroSectionTitle;
