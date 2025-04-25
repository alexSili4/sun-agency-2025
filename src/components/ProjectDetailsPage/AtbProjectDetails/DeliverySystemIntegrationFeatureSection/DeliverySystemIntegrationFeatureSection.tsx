import { FC } from 'react';
import { IProps } from './DeliverySystemIntegrationFeatureSection.types';
import {
  Container,
  Image,
  Section,
} from './DeliverySystemIntegrationFeatureSection.styled';
// ----- components
import Text from '@AtbProjectDetailsComponents/Text';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ContentContainer from '@AtbProjectDetailsComponents/ContentContainer';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';

const DeliverySystemIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
}) => {
  return (
    <Section>
      <HiddenSectionTitle title={title} />
      <GeneralContainer>
        <Container>
          <ContentContainer title={title}>
            <Text text={desc} />
          </ContentContainer>
          <Image src={banner} alt='' />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default DeliverySystemIntegrationFeatureSection;
