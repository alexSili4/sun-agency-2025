import { FC } from 'react';
import AtbProjectDetailsHeroSection from '@ProjectDetailsPageComponents/AtbProjectDetailsHeroSection';
import AtbGeneralInfoSection from '@ProjectDetailsPageComponents/AtbGeneralInfoSection';
import { IProps } from './AtbProjectDetails.types.ts';
import AtbBusinessMetricsSection from '@ProjectDetailsPageComponents/AtbBusinessMetricsSection';
import AtbTechnicalTaskSection from '@ProjectDetailsPageComponents/AtbTechnicalTaskSection';

const AtbProjectDetails: FC<IProps> = ({ project }) => {
  const {
    mainInfo: { name, tags, title, primaryBanner },
    generalInfo: { client, desc: generalInfoDesc, timeline, websiteAddress },
    businessMetrics,
    banner1,
    technicalTask: { desc: technicalTaskDesc, services },
  } = project;

  return (
    <>
      <AtbProjectDetailsHeroSection
        name={name}
        tags={tags}
        title={title}
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
      <AtbTechnicalTaskSection desc={technicalTaskDesc} services={services} />
    </>
  );
};

export default AtbProjectDetails;
