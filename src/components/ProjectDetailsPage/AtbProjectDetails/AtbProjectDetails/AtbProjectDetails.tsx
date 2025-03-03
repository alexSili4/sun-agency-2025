import { FC } from 'react';
import { IProps } from './AtbProjectDetails.types';
// ----- components
import AtbProjectDetailsHeroSection from '@AtbProjectDetailsComponents/AtbHeroSection';
import AtbGeneralInfoSection from '@AtbProjectDetailsComponents/AtbGeneralInfoSection';
import AtbBusinessMetricsSection from '@AtbProjectDetailsComponents/AtbBusinessMetricsSection';
import AtbTechnicalTaskSection from '@AtbProjectDetailsComponents/AtbTechnicalTaskSection';
import AtbCashSystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbCashSystemIntegrationFeatureSection';
import AtbPaymentSystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbPaymentSystemIntegrationFeatureSection';
import AtbDeliverySystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbDeliverySystemIntegrationFeatureSection';
import AtbLoyaltySystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbLoyaltySystemIntegrationFeatureSection';
import AtbMobAppIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbMobAppIntegrationFeatureSection';
import AtbFunFactSection from '@AtbProjectDetailsComponents/AtbFunFactSection';
import AtbProjectTeamSection from '@AtbProjectDetailsComponents/AtbProjectTeamSection';
import AtbProjectPreviewSection from '@AtbProjectDetailsComponents/AtbProjectPreviewSection';
import AtbProjectReviewsSection from '@AtbProjectDetailsComponents/AtbProjectReviewsSection';

const AtbProjectDetails: FC<IProps> = ({ project, isDesk }) => {
  const {
    mainInfo: {
      name,
      tags,
      title: mainInfoTitle,
      primaryBanner: { mobile: primaryBannerMobile, desk: primaryBannerDesk },
    },
    generalInfo: { client, desc: generalInfoDesc, timeline, websiteAddress },
    businessMetrics,
    banner1: { mobile: banner1Mobile, desk: banner1Desk },
    technicalTask: { desc: technicalTaskDesc, services, preview },
    feature1: {
      title: cashSystemIntegrationTitle,
      banner: {
        mobile: cashSystemIntegrationBannerMobile,
        desk: cashSystemIntegrationBannerDesk,
      },
      desc: cashSystemIntegrationDesc,
    },
    feature2: {
      banner: {
        mobile: paymentSystemIntegrationBannerMobile,
        desk: paymentSystemIntegrationBannerDesk,
      },
      desc: paymentSystemIntegrationDesc,
      title: paymentSystemIntegrationTitle,
      metrics: paymentSystemIntegrationMetrics,
    },
    feature3: {
      banner: {
        mobile: deliverySystemIntegrationBannerMobile,
        desk: deliverySystemIntegrationBannerDesk,
      },
      desc: deliverySystemIntegrationDesc,
      title: deliverySystemIntegrationTitle,
    },
    feature4: {
      title: loyaltySystemIntegrationTitle,
      desc: loyaltySystemIntegrationDesc,
      banner: {
        desk: loyaltySystemIntegrationBannerDesk,
        mobile: loyaltySystemIntegrationBannerMobile,
      },
      metrics: loyaltySystemIntegrationMetrics,
    },
    feature5: {
      title: mobAppIntegrationTitle,
      desc: mobAppIntegrationDesc,
      banner: {
        desk: mobAppIntegrationBannerDesk,
        mobile: mobAppIntegrationBannerMobile,
      },
      additionalBanner: {
        desk: mobAppIntegrationAdditionalBannerDesk,
        mobile: mobAppIntegrationAdditionalBannerMobile,
      } = {},
    },
    funFact,
    teams: {
      client: { team: clientTeam, title: clientTeamTitle },
      sunAgency: { team: sunAgencyTeam, title: sunAgencyTeamTitle },
    },
    websitePreview,
    reviews,
  } = project;

  const primaryBanner = isDesk ? primaryBannerDesk : primaryBannerMobile;
  const banner1 = isDesk ? banner1Desk : banner1Mobile;
  const paymentSystemIntegrationBanner = isDesk
    ? paymentSystemIntegrationBannerDesk
    : paymentSystemIntegrationBannerMobile;
  const cashSystemIntegrationBanner = isDesk
    ? cashSystemIntegrationBannerDesk
    : cashSystemIntegrationBannerMobile;
  const deliverySystemIntegrationBanner = isDesk
    ? deliverySystemIntegrationBannerDesk
    : deliverySystemIntegrationBannerMobile;
  const loyaltySystemIntegrationBanner = isDesk
    ? loyaltySystemIntegrationBannerDesk
    : loyaltySystemIntegrationBannerMobile;
  const mobAppIntegrationBanner = isDesk
    ? mobAppIntegrationBannerDesk
    : mobAppIntegrationBannerMobile;
  const mobAppIntegrationAdditionalBanner = isDesk
    ? mobAppIntegrationAdditionalBannerDesk
    : mobAppIntegrationAdditionalBannerMobile;

  return (
    <>
      <AtbProjectDetailsHeroSection
        name={name}
        tags={tags}
        title={mainInfoTitle}
        primaryBanner={primaryBanner}
        borderRadiusDesk={58}
        borderRadiusMobile={40}
      />
      <AtbGeneralInfoSection
        desc={generalInfoDesc}
        timeline={timeline}
        client={client}
        websiteAddress={websiteAddress}
      />
      <AtbBusinessMetricsSection
        businessMetrics={businessMetrics}
        banner={banner1}
      />
      <AtbTechnicalTaskSection
        desc={technicalTaskDesc}
        services={services}
        animationData={preview}
      />
      <AtbCashSystemIntegrationFeatureSection
        banner={cashSystemIntegrationBanner}
        desc={cashSystemIntegrationDesc}
        title={cashSystemIntegrationTitle}
      />
      <AtbPaymentSystemIntegrationFeatureSection
        banner={paymentSystemIntegrationBanner}
        desc={paymentSystemIntegrationDesc}
        title={paymentSystemIntegrationTitle}
        metrics={paymentSystemIntegrationMetrics}
      />
      <AtbDeliverySystemIntegrationFeatureSection
        banner={deliverySystemIntegrationBanner}
        desc={deliverySystemIntegrationDesc}
        title={deliverySystemIntegrationTitle}
      />
      <AtbLoyaltySystemIntegrationFeatureSection
        title={loyaltySystemIntegrationTitle}
        desc={loyaltySystemIntegrationDesc}
        banner={loyaltySystemIntegrationBanner}
        metrics={loyaltySystemIntegrationMetrics}
      />
      <AtbMobAppIntegrationFeatureSection
        title={mobAppIntegrationTitle}
        desc={mobAppIntegrationDesc}
        banner={mobAppIntegrationBanner}
        additionalBanner={mobAppIntegrationAdditionalBanner}
      />
      <AtbFunFactSection funFact={funFact} />
      <AtbProjectTeamSection
        clientTeam={clientTeam}
        clientTeamTitle={clientTeamTitle}
        sunAgencyTeam={sunAgencyTeam}
        sunAgencyTeamTitle={sunAgencyTeamTitle}
      />
      <AtbProjectPreviewSection animationData={websitePreview} />
      <AtbProjectReviewsSection reviews={reviews} />
    </>
  );
};

export default AtbProjectDetails;
