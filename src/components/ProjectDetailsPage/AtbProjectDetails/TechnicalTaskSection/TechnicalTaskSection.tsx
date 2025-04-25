import { FC } from 'react';
import { IProps } from './TechnicalTaskSection.types';
import { Container, Section, TextWrap } from './TechnicalTaskSection.styled';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import Text from '@AtbProjectDetailsComponents/Text';
import ContentContainer from '@AtbProjectDetailsComponents/ContentContainer';
import TechnicalTaskSectionPreview from '@AtbProjectDetailsComponents/TechnicalTaskSectionPreview';
import TechnicalTaskSectionServicesList from '@AtbProjectDetailsComponents/TechnicalTaskSectionServicesList';

const TechnicalTaskSection: FC<IProps> = ({
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
            <ContentContainer title='Клієнт та задача'>
              <Text text={desc} />
            </ContentContainer>
            <ContentContainer title='Послуги'>
              <TechnicalTaskSectionServicesList services={services} />
            </ContentContainer>
          </TextWrap>
        </GeneralContainer>
        <TechnicalTaskSectionPreview animationData={animationData} />
      </Container>
    </Section>
  );
};

export default TechnicalTaskSection;
