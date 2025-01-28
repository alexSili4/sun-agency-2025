import { FC } from 'react';
import { IProps } from './AtbTechnicalTaskSection.types';
import GeneralContainer from '@/components/General/GeneralContainer';
import AtbTechnicalTaskPreview from '@ProjectDetailsPageComponents/AtbTechnicalTaskPreview';
import {
  Container,
  InfoContentWrap,
  InfoWrap,
  Section,
  Text,
  TextWrap,
  Title,
} from './AtbTechnicalTaskSection.styled';
import AtbTechnicalTaskServicesList from '@ProjectDetailsPageComponents/AtbTechnicalTaskServicesList';

const AtbTechnicalTaskSection: FC<IProps> = ({ desc, services }) => {
  return (
    <Section>
      <Container>
        <GeneralContainer>
          <TextWrap>
            <InfoWrap>
              <Title>Клієнт та задача</Title>
              <InfoContentWrap>
                <Text>{desc}</Text>
              </InfoContentWrap>
            </InfoWrap>
            <InfoWrap>
              <Title>Послуги</Title>
              <InfoContentWrap>
                <AtbTechnicalTaskServicesList services={services} />
              </InfoContentWrap>
            </InfoWrap>
          </TextWrap>
        </GeneralContainer>
        <AtbTechnicalTaskPreview />
      </Container>
    </Section>
  );
};

export default AtbTechnicalTaskSection;
