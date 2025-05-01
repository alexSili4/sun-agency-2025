import { FC } from 'react';
import HeroSection from '@ContactsPageComponents/HeroSection';
import ParticlesItem from '@GeneralComponents/ParticlesItem';

const Contacts: FC = () => {
  return (
    <>
      <HeroSection animationDuration={1} />
      <ParticlesItem />
    </>
  );
};

export default Contacts;
