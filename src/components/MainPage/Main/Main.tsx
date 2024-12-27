import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import DonationSection from '@MainPageComponents/DonationSection';

const Main: FC = () => {
  return (
    <div>
      <HeroSection />
      <DonationSection />
    </div>
  );
};

export default Main;
