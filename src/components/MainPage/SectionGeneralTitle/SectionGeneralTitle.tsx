import { FC } from 'react';
import AnimatedSectionTitle from '@AnimationBlocks/AnimatedSectionTitle';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import { Container } from './SectionGeneralTitle.styled';
import { IProps } from './SectionGeneralTitle.types';

const SectionGeneralTitle: FC<IProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <AnimatedSectionTitle text={title} />
      <AnimatedSectionSubtitle text={subtitle} />
    </Container>
  );
};

export default SectionGeneralTitle;
