import { FC } from 'react';
import { IProps } from './AtbTechnicalTaskSection.types';
import { Container, Section, TextWrap } from './AtbTechnicalTaskSection.styled';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import AtbTechnicalTaskPreview from '@AtbProjectDetailsComponents/AtbTechnicalTaskPreview';
import AtbTechnicalTaskServicesList from '@AtbProjectDetailsComponents/AtbTechnicalTaskServicesList';

const AtbTechnicalTaskSection: FC<IProps> = ({
  desc,
  services,
  animationData,
}) => {
  return (
    <Section>
      <Container>
        <HiddenSectionTitle title='Клієнт та задача' />
        <GeneralContainer>
          <TextWrap>
            <AtbContentContainer title='Клієнт та задача'>
              <AtbText text={desc} />
            </AtbContentContainer>
            <AtbContentContainer title='Послуги'>
              <AtbTechnicalTaskServicesList services={services} />
            </AtbContentContainer>
          </TextWrap>
        </GeneralContainer>
        <AtbTechnicalTaskPreview animationData={animationData} />
      </Container>
    </Section>
  );
};

export default AtbTechnicalTaskSection;
