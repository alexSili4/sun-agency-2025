import { FC, Fragment } from 'react';
import {
  Title,
  Accent,
  AnimatedContainer,
  AnimatedElement,
  TextLine,
  TextLineWord,
} from './AnimatedHeroSectionTitle.styled';
import AnimatedHeroSectionTitlePart from '@AnimatedContactsPageComponents/AnimatedHeroSectionTitlePart';

const AnimatedHeroSectionTitle: FC = () => {
  const strings = ['Завжди на зв’язку! Давайте', 'обговоримо ваш'];
  const accent = ' проект';

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
      <AnimatedContainer
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <TextLine>
          {strings.map((text, index) => {
            const animatedElement = (
              <AnimatedHeroSectionTitlePart text={text} />
            );

            return (
              <Fragment key={index}>
                {isLastIndex ? (
                  animatedElement
                ) : (
                  <>
                    <br />
                    {animatedElement}
                  </>
                )}
              </Fragment>
            );
          })}
          {/* <AnimatedElement variants={elementVariants}>
            <TextLineWord>Завжди</TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord> </TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord>на</TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord> </TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord>зв’язку!</TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord> </TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord>Давайте</TextLineWord>
          </AnimatedElement>
          <br />
          <AnimatedElement variants={elementVariants}>
            <TextLineWord>обговоримо</TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord> </TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <TextLineWord>ваш</TextLineWord>
          </AnimatedElement>
          <AnimatedElement variants={elementVariants}>
            <Accent>{accent}</Accent>
          </AnimatedElement> */}
        </TextLine>
      </AnimatedContainer>
    </Title>
  );
};

export default AnimatedHeroSectionTitle;
