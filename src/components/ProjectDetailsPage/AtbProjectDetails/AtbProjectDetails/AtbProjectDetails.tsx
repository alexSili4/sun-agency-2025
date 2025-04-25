import { FC } from 'react';
import { IProps } from './AtbProjectDetails.types';
// ----- components
import HeroSection from '@AtbProjectDetailsComponents/HeroSection';
import GeneralInfoSection from '@AtbProjectDetailsComponents/GeneralInfoSection';
import BusinessMetricsSection from '@AtbProjectDetailsComponents/BusinessMetricsSection';
import TechnicalTaskSection from '@AtbProjectDetailsComponents/TechnicalTaskSection';
import CashSystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/CashSystemIntegrationFeatureSection';
import PaymentSystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/PaymentSystemIntegrationFeatureSection';
import DeliverySystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/DeliverySystemIntegrationFeatureSection';
import LoyaltySystemIntegrationFeatureSection from '@AtbProjectDetailsComponents/LoyaltySystemIntegrationFeatureSection';
import MobAppIntegrationFeatureSection from '@AtbProjectDetailsComponents/MobAppIntegrationFeatureSection';
import TeamSection from '@AtbProjectDetailsComponents/TeamSection';
import ProjectPreviewSection from '@AtbProjectDetailsComponents/ProjectPreviewSection';
import ReviewsSection from '@AtbProjectDetailsComponents/ReviewsSection';
import FunFactSection from '@AtbProjectDetailsComponents/FunFactSection';

const AtbProjectDetails: FC<IProps> = ({ project, isDesk }) => {
  const {
    mainInfo: {
      name,
      tags,
      title: mainInfoTitle,
      primaryBanner: { mobile: primaryBannerMobile, desk: primaryBannerDesk },
    },
    generalInfo: {
      client,
      desc: generalInfoDesc,
      timeline,
      websiteAddress,
      fullWebsiteAddress,
    },
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
      <HeroSection
        name={name}
        tags={tags}
        title={mainInfoTitle}
        primaryBanner={primaryBanner}
        borderRadiusDesk={58}
        borderRadiusMobile={40}
      />
      <GeneralInfoSection
        desc={generalInfoDesc}
        timeline={timeline}
        client={client}
        websiteAddress={websiteAddress}
        fullWebsiteAddress={fullWebsiteAddress}
      />
      <BusinessMetricsSection
        businessMetrics={businessMetrics}
        banner={banner1}
      />
      <TechnicalTaskSection
        desc={technicalTaskDesc}
        services={services}
        animationData={preview}
      />
      <CashSystemIntegrationFeatureSection
        banner={cashSystemIntegrationBanner}
        desc={cashSystemIntegrationDesc}
        title={cashSystemIntegrationTitle}
      />
      <PaymentSystemIntegrationFeatureSection
        banner={paymentSystemIntegrationBanner}
        desc={paymentSystemIntegrationDesc}
        title={paymentSystemIntegrationTitle}
        metrics={paymentSystemIntegrationMetrics}
      />
      <DeliverySystemIntegrationFeatureSection
        banner={deliverySystemIntegrationBanner}
        desc={deliverySystemIntegrationDesc}
        title={deliverySystemIntegrationTitle}
      />
      <LoyaltySystemIntegrationFeatureSection
        title={loyaltySystemIntegrationTitle}
        desc={loyaltySystemIntegrationDesc}
        banner={loyaltySystemIntegrationBanner}
        metrics={loyaltySystemIntegrationMetrics}
      />
      <MobAppIntegrationFeatureSection
        title={mobAppIntegrationTitle}
        desc={mobAppIntegrationDesc}
        banner={mobAppIntegrationBanner}
        additionalBanner={mobAppIntegrationAdditionalBanner}
      />
      <FunFactSection funFact={funFact} />
      <TeamSection
        clientTeam={clientTeam}
        clientTeamTitle={clientTeamTitle}
        sunAgencyTeam={sunAgencyTeam}
        sunAgencyTeamTitle={sunAgencyTeamTitle}
      />
      <ProjectPreviewSection animationData={websitePreview} />
      <ReviewsSection reviews={reviews} />
    </>
  );
};

export default AtbProjectDetails;
