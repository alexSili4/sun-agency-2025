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

export default AtbMobAppIntegrationFeatureSection;
