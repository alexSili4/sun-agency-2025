import { FC } from 'react';
import { IProps } from './AtbProjectDetails.types';
// ----- components
import AtbProjectDetailsHeroSection from '@AtbProjectDetailsComponents/AtbProjectDetailsHeroSection';
// import AtbGeneralInfoSection from '@AtbProjectDetailsComponents/AtbGeneralInfoSection';
// import AtbBusinessMetricsSection from '@AtbProjectDetailsComponents/AtbBusinessMetricsSection';
// import AtbTechnicalTaskSection from '@AtbProjectDetailsComponents/AtbTechnicalTaskSection';
// import AtbCashSystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbCashSystemIntegrationFeatureSection';
// import AtbPaymentSystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbPaymentSystemIntegrationFeatureSection';
// import AtbDeliverySystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbDeliverySystemIntegrationFeatureSection';
// import AtbLoyaltySystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbLoyaltySystemIntegrationFeatureSection';
// import AtbMobAppIntegrationFeatureSection from '@AtbProjectDetailsComponents/AtbMobAppIntegrationFeatureSection';
// import AtbFunFactSection from '@AtbProjectDetailsComponents/AtbFunFactSection';
// import AtbProjectTeamSection from '@AtbProjectDetailsComponents/AtbProjectTeamSection';
// import AtbProjectPreviewSection from '@AtbProjectDetailsComponents/AtbProjectPreviewSection';

const AtbProjectDetails: FC<IProps> = ({ project, isDesk }) => {
  const {
    mainInfo: {
      name,
      tags,
      title: mainInfoTitle,
      primaryBanner: { mobile: primaryBannerMobile, desk: primaryBannerDesk },
    },
    // generalInfo: { client, desc: generalInfoDesc, timeline, websiteAddress },
    // businessMetrics,
    // banner1,
    // technicalTask: { desc: technicalTaskDesc, services, preview },
    // feature1: {
    //   title: cashSystemIntegrationTitle,
    //   banner: cashSystemIntegrationBanner,
    //   desc: cashSystemIntegrationDesc,
    // },
    // feature2: {
    //   banner: paymentSystemIntegrationBanner,
    //   desc: paymentSystemIntegrationDesc,
    //   title: paymentSystemIntegrationTitle,
    //   metrics: paymentSystemIntegrationMetrics,
    // },
    // feature3: {
    //   banner: deliverySystemIntegrationBanner,
    //   desc: deliverySystemIntegrationDesc,
    //   title: deliverySystemIntegrationTitle,
    // },
    // feature4: {
    //   title: loyaltySystemIntegrationTitle,
    //   desc: loyaltySystemIntegrationDesc,
    //   banner: loyaltySystemIntegrationBanner,
    //   metrics: loyaltySystemIntegrationMetrics,
    // },
    // feature5: {
    //   title: mobAppIntegrationTitle,
    //   desc: mobAppIntegrationDesc,
    //   banner: mobAppIntegrationBanner,
    //   additionalBanner: mobAppIntegrationAdditionalBanner,
    // },
    // funFact,
    // teams: {
    //   client: { team: clientTeam, title: clientTeamTitle },
    //   sunAgency: { team: sunAgencyTeam, title: sunAgencyTeamTitle },
    // },
    // websitePreview,
  } = project;

  const primaryBanner = isDesk ? primaryBannerDesk : primaryBannerMobile;

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
      {/* <AtbGeneralInfoSection
        desc={generalInfoDesc}
        timeline={timeline}
        client={client}
        websiteAddress={websiteAddress}
      /> */}
      {/* <AtbBusinessMetricsSection
        businessMetrics={businessMetrics}
        banner={banner1}
      /> */}
      {/* <AtbTechnicalTaskSection
        desc={technicalTaskDesc}
        services={services}
        animationData={preview}
      /> */}
      {/* <AtbCashSystemIntegrationFeatureSection
        banner={cashSystemIntegrationBanner}
        desc={cashSystemIntegrationDesc}
        title={cashSystemIntegrationTitle}
      /> */}
      {/* <AtbPaymentSystemIntegrationFeatureSection
        banner={paymentSystemIntegrationBanner}
        desc={paymentSystemIntegrationDesc}
        title={paymentSystemIntegrationTitle}
        metrics={paymentSystemIntegrationMetrics}
      /> */}
      {/* <AtbDeliverySystemIntegrationFeatureSection
        banner={deliverySystemIntegrationBanner}
        desc={deliverySystemIntegrationDesc}
        title={deliverySystemIntegrationTitle}
      /> */}
      {/* <AtbLoyaltySystemIntegrationFeatureSection
        title={loyaltySystemIntegrationTitle}
        desc={loyaltySystemIntegrationDesc}
        banner={loyaltySystemIntegrationBanner}
        metrics={loyaltySystemIntegrationMetrics}
      /> */}
      {/* <AtbMobAppIntegrationFeatureSection
        title={mobAppIntegrationTitle}
        desc={mobAppIntegrationDesc}
        banner={mobAppIntegrationBanner}
        additionalBanner={mobAppIntegrationAdditionalBanner}
      /> */}
      {/* <AtbFunFactSection funFact={funFact} /> */}
      {/* <AtbProjectTeamSection
        clientTeam={clientTeam}
        clientTeamTitle={clientTeamTitle}
        sunAgencyTeam={sunAgencyTeam}
        sunAgencyTeamTitle={sunAgencyTeamTitle}
      /> */}
      {/* <AtbProjectPreviewSection animationData={websitePreview} /> */}
    </>
  );
};

export default AtbProjectDetails;
