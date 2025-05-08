import { FC } from 'react';
import { Container } from './SectionGeneralTitle.styled';
import { IProps } from './SectionGeneralTitle.types';
// ----- components
import AnimatedSectionTitle from '@AnimatedMainPageComponents/AnimatedSectionTitle';
import AnimatedSectionSubtitle from '@AnimatedMainPageComponents/AnimatedSectionSubtitle';

const SectionGeneralTitle: FC<IProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <AnimatedSectionTitle text={title} />
      <AnimatedSectionSubtitle text={subtitle} />
    </Container>
  );
};

export default SectionGeneralTitle;
