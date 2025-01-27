import { FC } from 'react';
import AtbProjectDetailsHeroSection from '@ProjectDetailsPageComponents/AtbProjectDetailsHeroSection';
import AtbGeneralInfoSection from '@ProjectDetailsPageComponents/AtbGeneralInfoSection';
import { IProps } from './AtbProjectDetails.types.ts';

const AtbProjectDetails: FC<IProps> = ({ project }) => {
  const {
    mainInfo: { name, tags, title, primaryBanner },
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
      <AtbGeneralInfoSection />
    </>
  );
};

export default AtbProjectDetails;
