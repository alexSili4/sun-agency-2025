import { FC } from 'react';
import { IProps } from './AtbMobAppIntegrationFeatureSection.types';
import {
  BannersWrap,
  BannerWrap,
  Container,
  Image,
  Section,
} from './AtbMobAppIntegrationFeatureSection.styled';
// ----- components
import AtbContentContainer from '@AtbProjectDetailsComponents/AtbContentContainer';
import AtbText from '@AtbProjectDetailsComponents/AtbText';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const AtbMobAppIntegrationFeatureSection: FC<IProps> = ({
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
          <AtbContentContainer title={title}>
            <AtbText text={desc} />
          </AtbContentContainer>
        </GeneralContainer>
        <BannersWrap>
          <Image src={banner} />
          <BannerWrap>
            <Image src={additionalBanner} />
          </BannerWrap>
        </BannersWrap>
      </Container>
    </Section>
  );
};

export default AtbMobAppIntegrationFeatureSection;
