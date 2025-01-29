import { FC } from 'react';
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import { IProps } from './AtbDeliverySystemIntegrationFeatureSection.types';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Container,
  Image,
  Section,
} from './AtbDeliverySystemIntegrationFeatureSection.styled';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

const AtbDeliverySystemIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
}) => {
  return (
    <Section>
      <Container>
        <HiddenSectionTitle title={title} />
        <GeneralContainer>
          <AtbContentContainer title={title}>
            <AtbText text={desc} />
          </AtbContentContainer>
        </GeneralContainer>
        <Image src={banner} />
      </Container>
    </Section>
  );
};

export default AtbDeliverySystemIntegrationFeatureSection;
