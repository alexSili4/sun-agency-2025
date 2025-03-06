import { FC } from 'react';
import EmployeesSection from '@AboutPageComponents/EmployeesSection';
import HeroSection from '@AboutPageComponents/HeroSection';
import OurProcessSection from '@AboutPageComponents/OurProcessSection';
import PrinciplesSection from '@AboutPageComponents/PrinciplesSection';
import SystemSection from '@AboutPageComponents/SystemSection';
import { IProps } from './About.types';

const About: FC<IProps> = ({ employees }) => {
  return (
    <>
      <HeroSection />
      <OurProcessSection />
      <PrinciplesSection />
      <SystemSection />
      <EmployeesSection employees={employees} />
    </>
  );
};

export default About;
