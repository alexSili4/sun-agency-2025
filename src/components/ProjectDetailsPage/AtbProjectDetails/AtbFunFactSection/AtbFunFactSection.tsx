import { FC } from 'react';
import { IProps } from './AtbFunFactSection.types';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import decorativeElement from '@/images/projects/fun-fact-decorative-element.png';
import { Container, Content, Section, Text } from './AtbFunFactSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const AtbFunFactSection: FC<IProps> = ({ funFact }) => {
  return (
    <Section>
      <GeneralContainer>
        <HiddenSectionTitle title='Цікавий факт' />
        <Container>
          <Content decorativeElement={decorativeElement}>
            <Text>{funFact}</Text>
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AtbFunFactSection;
