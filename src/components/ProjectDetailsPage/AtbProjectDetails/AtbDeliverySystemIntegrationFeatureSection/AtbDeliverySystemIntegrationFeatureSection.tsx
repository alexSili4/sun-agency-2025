import { FC } from 'react';
import { IProps } from './AtbDeliverySystemIntegrationFeatureSection.types';
import {
  Container,
  Image,
  Section,
} from './AtbDeliverySystemIntegrationFeatureSection.styled';
// ----- components
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

const AtbDeliverySystemIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
}) => {
  return (
    <Section>
      <HiddenSectionTitle title={title} />
      <GeneralContainer>
        <Container>
          <AtbContentContainer title={title}>
            <AtbText text={desc} />
          </AtbContentContainer>
          <Image src={banner} alt='' />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default AtbDeliverySystemIntegrationFeatureSection;
