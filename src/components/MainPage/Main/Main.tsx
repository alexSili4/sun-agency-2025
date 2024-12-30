import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import DonationSection from '@MainPageComponents/DonationSection';
import ProjectsSection from '@MainPageComponents/ProjectsSection';

const Main: FC = () => {
  return (
    <div>
      <HeroSection />
      <DonationSection />
      <ProjectsSection />
    </div>
  );
};

export default Main;
