import { FC } from 'react';
import { IProps } from './GeneralInfoSection.types';
import {
  Container,
  Description,
  Section,
  Text,
  InfoWrap,
  Title,
  TextWrap,
  StyledLink,
} from './GeneralInfoSection.styled';
// ----- components
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const GeneralInfoSection: FC<IProps> = ({
  desc,
  timeline,
  client,
  websiteAddress,
  fullWebsiteAddress,
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
              <StyledLink
                href={fullWebsiteAddress}
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

export default GeneralInfoSection;
