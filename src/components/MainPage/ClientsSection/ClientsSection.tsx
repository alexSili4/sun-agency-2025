import { FC } from 'react';
import { Section, Background } from './ClientsSection.styled';
import { IProps } from './ClientsSection.types';
// ----- components
import AnimatedClientsSectionBg from '@AnimationBlocks/AnimatedClientsSectionBg';
import AnimatedClientsSectionContent from '@AnimationBlocks/AnimatedClientsSectionContent';

const ClientsSection: FC<IProps> = ({
  sectionRef,
  shouldShowSectionContent,
}) => {
  return (
    <Section ref={sectionRef}>
      <Background>
        <AnimatedClientsSectionBg shouldShow={shouldShowSectionContent} />
        <AnimatedClientsSectionContent shouldShow={shouldShowSectionContent} />
      </Background>
    </Section>
  );
};

export default ClientsSection;
