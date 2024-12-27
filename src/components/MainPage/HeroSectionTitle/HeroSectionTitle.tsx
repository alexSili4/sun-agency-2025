import { FC } from 'react';
import {
  Accent,
  Symbol,
  Title,
  TitlePart,
  TitlePartContainer,
} from './HeroSectionTitle.styled';

const HeroShimmerTitle: FC = () => {
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

  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const symbolVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Title>
      <TitlePartContainer
        variants={titleVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          {firstPartSymbols.map((symbol, index) => (
            <Symbol variants={symbolVariants} key={index}>
              {symbol}
            </Symbol>
          ))}
        </TitlePart>
      </TitlePartContainer>
      <TitlePartContainer
        variants={titleVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          {secondPartSymbols.map((symbol, index) => (
            <Symbol variants={symbolVariants} key={index}>
              {symbol}
            </Symbol>
          ))}
          <Accent>
            {secondPartAccentSymbols.map((symbol, index) => (
              <Symbol variants={symbolVariants} key={index}>
                {symbol}
              </Symbol>
            ))}
          </Accent>
        </TitlePart>
      </TitlePartContainer>
      <TitlePartContainer
        variants={titleVariants}
        initial='hidden'
        animate='visible'
      >
        <TitlePart>
          <Accent>
            {thirdPartAccentSymbols.map((symbol, index) => (
              <Symbol variants={symbolVariants} key={index}>
                {symbol}
              </Symbol>
            ))}
          </Accent>
          {thirdPartSymbols.map((symbol, index) => (
            <Symbol variants={symbolVariants} key={index}>
              {symbol}
            </Symbol>
          ))}
        </TitlePart>
      </TitlePartContainer>
    </Title>
  );
};

export default HeroShimmerTitle;
