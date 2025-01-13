import { FC } from 'react';
import SectionTitle from '@GeneralComponents/SectionTitle';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import { Container } from './SectionGeneralTitle.styled';
import { IProps } from './SectionGeneralTitle.types';

const SectionGeneralTitle: FC<IProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <SectionTitle text={title} />
      <AnimatedSectionSubtitle text={subtitle} />
    </Container>
  );
};

export default SectionGeneralTitle;
