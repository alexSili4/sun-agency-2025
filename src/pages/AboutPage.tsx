import { FC } from 'react';
import About from '@AboutPageComponents/About';
import { about } from '@/constants';

const AboutPage: FC = () => {
  const { employees, metrics, principles, system, process } = about;

  return (
    <About
      employees={employees}
      metrics={metrics}
      principles={principles}
      system={system}
      process={process}
    />
  );
};

export default AboutPage;
