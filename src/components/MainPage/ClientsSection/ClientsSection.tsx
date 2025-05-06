import { FC } from 'react';
import { Section, Background } from './ClientsSection.styled';
import { IProps } from './ClientsSection.types';
// ----- components
import AnimatedClientsSectionBg from '@AnimatedMainPageComponents/AnimatedClientsSectionBg';
import AnimatedClientsSectionContent from '@AnimatedMainPageComponents/AnimatedClientsSectionContent';

const ClientsSection: FC<IProps> = ({
  sectionRef,
  shouldShowSectionContent,
  clients,
}) => {
  return (
    <Section ref={sectionRef}>
      <Background>
        <AnimatedClientsSectionBg shouldShow={shouldShowSectionContent} />
        <AnimatedClientsSectionContent
          shouldShow={shouldShowSectionContent}
          clients={clients}
        />
      </Background>
    </Section>
  );
};

export default ClientsSection;
