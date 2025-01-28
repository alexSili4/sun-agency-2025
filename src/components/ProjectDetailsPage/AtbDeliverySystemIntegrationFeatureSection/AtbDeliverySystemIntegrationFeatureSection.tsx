import { FC } from 'react';
import AtbContentContainer from '@ProjectDetailsPageComponents/AtbContentContainer';
import AtbText from '@ProjectDetailsPageComponents/AtbText';
import { IProps } from './AtbDeliverySystemIntegrationFeatureSection.types';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Container,
  Image,
  Section,
} from './AtbDeliverySystemIntegrationFeatureSection.styled';

const AtbDeliverySystemIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
}) => {
  return (
    <Section>
      <Container>
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
