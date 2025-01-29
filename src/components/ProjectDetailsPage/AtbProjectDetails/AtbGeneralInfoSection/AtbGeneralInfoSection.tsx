import { FC } from 'react';
import { IProps } from './AtbGeneralInfoSection.types';
import {
  Container,
  Description,
  Section,
  Text,
  InfoWrap,
  Title,
  TextWrap,
} from './AtbGeneralInfoSection.styled';
// ----- components
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const AtbGeneralInfoSection: FC<IProps> = ({
  desc,
  timeline,
  client,
  websiteAddress,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <HiddenSectionTitle title='Про проєкт АТБ' />
          <Description>{desc}</Description>
          <TextWrap>
            <InfoWrap>
              <Title>Timeline</Title>
              <Text>{timeline}</Text>
            </InfoWrap>
            <InfoWrap>
              <Title>Клієнт</Title>
              <Text>{client}</Text>
            </InfoWrap>
            <InfoWrap>
              <Title>Вебсайт</Title>
              <Text>{websiteAddress}</Text>
            </InfoWrap>
          </TextWrap>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AtbGeneralInfoSection;
