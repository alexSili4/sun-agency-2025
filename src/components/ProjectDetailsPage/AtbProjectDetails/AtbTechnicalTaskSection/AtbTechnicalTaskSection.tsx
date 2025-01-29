import { FC } from 'react';
import { IProps } from './AtbTechnicalTaskSection.types';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AtbTechnicalTaskPreview from '@AtbProjectDetailsComponents/AtbTechnicalTaskPreview';
import { Container, Section, TextWrap } from './AtbTechnicalTaskSection.styled';
import AtbTechnicalTaskServicesList from '@AtbProjectDetailsComponents/AtbTechnicalTaskServicesList';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

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
