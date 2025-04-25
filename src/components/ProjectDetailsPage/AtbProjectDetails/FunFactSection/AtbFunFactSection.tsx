import { FC } from 'react';
import { IProps } from './FunFactSection.types';
import decorativeElement from '@/images/projectDetails/fun-fact-decorative-element.png';
import {
  Container,
  Content,
  Section,
  Text,
  Image,
} from './FunFactSection.styled';
// ----- components
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const AtbFunFactSection: FC<IProps> = ({ funFact }) => {
  return (
    <Section>
      <GeneralContainer>
        <HiddenSectionTitle title='Цікавий факт' />
        <Container>
          <Content>
            <Image src={decorativeElement} alt='Декоративний елемент' />
            <Text>{funFact}</Text>
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AtbFunFactSection;
