import { FC } from 'react';
import AtbProjectDetailsHeroSection from '@ProjectDetailsPageComponents/AtbProjectDetailsHeroSection';
import AtbGeneralInfoSection from '@ProjectDetailsPageComponents/AtbGeneralInfoSection';
import { IProps } from './AtbProjectDetails.types.ts';
import AtbBusinessMetricsSection from '@ProjectDetailsPageComponents/AtbBusinessMetricsSection';
import AtbTechnicalTaskSection from '@ProjectDetailsPageComponents/AtbTechnicalTaskSection';
import AtbCashSystemIntegrationFeatureSection from '@ProjectDetailsPageComponents/AtbCashSystemIntegrationFeatureSection';
import AtbPaymentSystemIntegrationFeatureSection from '@ProjectDetailsPageComponents/AtbPaymentSystemIntegrationFeatureSection';
import AtbDeliverySystemIntegrationFeatureSection from '@ProjectDetailsPageComponents/AtbDeliverySystemIntegrationFeatureSection';

const AtbProjectDetails: FC<IProps> = ({ project }) => {
  const {
    mainInfo: { name, tags, title: mainInfoTitle, primaryBanner },
    generalInfo: { client, desc: generalInfoDesc, timeline, websiteAddress },
    businessMetrics,
    banner1,
    technicalTask: { desc: technicalTaskDesc, services, preview },
    feature1: {
      title: cashSystemIntegrationTitle,
      banner: cashSystemIntegrationBanner,
      desc: cashSystemIntegrationDesc,
    },
    feature2: {
      banner: paymentSystemIntegrationBanner,
      desc: paymentSystemIntegrationDesc,
      title: paymentSystemIntegrationTitle,
      metrics: paymentSystemIntegrationMetrics,
    },
    feature3: {
      banner: deliverySystemIntegrationBanner,
      desc: deliverySystemIntegrationDesc,
      title: deliverySystemIntegrationTitle,
    },
  } = project;

  return (
    <>
      <AtbProjectDetailsHeroSection
        name={name}
        tags={tags}
        title={mainInfoTitle}
        primaryBanner={primaryBanner}
        borderRadius={58}
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
      {paymentSystemIntegrationMetrics && (
        <AtbPaymentSystemIntegrationFeatureSection
          banner={paymentSystemIntegrationBanner}
          desc={paymentSystemIntegrationDesc}
          title={paymentSystemIntegrationTitle}
          metrics={paymentSystemIntegrationMetrics}
        />
      )}
      <AtbDeliverySystemIntegrationFeatureSection
        banner={deliverySystemIntegrationBanner}
        desc={deliverySystemIntegrationDesc}
        title={deliverySystemIntegrationTitle}
      />
    </>
  );
};

export default AtbProjectDetails;
