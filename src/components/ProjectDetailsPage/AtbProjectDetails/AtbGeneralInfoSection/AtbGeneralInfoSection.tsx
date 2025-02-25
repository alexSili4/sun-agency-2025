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
  StyledLink,
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
  const projectLink = `http://${websiteAddress}`;

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
              <a href='http://' target='_blank' rel='noopener noreferrer'></a>
              <StyledLink
                href={projectLink}
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                {websiteAddress}
              </StyledLink>
            </InfoWrap>
          </TextWrap>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AtbGeneralInfoSection;
