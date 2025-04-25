import { FC } from 'react';
import { IProps } from './MobAppIntegrationFeatureSection.types';
import {
  BannersWrap,
  BannerWrap,
  Container,
  Image,
  Section,
} from './MobAppIntegrationFeatureSection.styled';
// ----- components
import ContentContainer from '@AtbProjectDetailsComponents/ContentContainer';
import Text from '@AtbProjectDetailsComponents/Text';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const MobAppIntegrationFeatureSection: FC<IProps> = ({
  title,
  desc,
  banner,
  additionalBanner,
}) => {
  return (
    <Section>
      <Container>
        <HiddenSectionTitle title={title} />
        <GeneralContainer>
          <ContentContainer title={title}>
            <Text text={desc} />
          </ContentContainer>
          <BannersWrap>
            <Image src={banner} alt='' />
            <BannerWrap>
              <Image src={additionalBanner} alt='' />
            </BannerWrap>
          </BannersWrap>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default MobAppIntegrationFeatureSection;
