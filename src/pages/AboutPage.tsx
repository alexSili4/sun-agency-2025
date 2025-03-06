import { FC } from 'react';
import About from '@AboutPageComponents/About';
import { about } from '@/constants';

const AboutPage: FC = () => {
  const { employees } = about;

  return <About employees={employees} />;
};

export default AboutPage;
