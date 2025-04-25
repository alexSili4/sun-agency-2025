import { FC } from 'react';
import HiddenPageTitle from '@GeneralComponents/HiddenPageTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const HeroSection: FC = () => {
  return (
    <Section>
      <HiddenPageTitle title='Контакти' />
      <GeneralContainer></GeneralContainer>
    </Section>
  );
};

export default HeroSection;
