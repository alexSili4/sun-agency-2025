import { FC } from 'react';
import { Container, SubTitle } from './HeroSectionTitle.styled';
import AnimatedHeroSectionTitle from '@AnimatedContactsPageComponents/AnimatedHeroSectionTitle';

const HeroSectionTitle: FC = () => {
  return (
    <Container>
      <AnimatedHeroSectionTitle />
      <SubTitle>
        Зв'яжіться з нами, щоб поділитися ідеєю або запропонувати партнерство.
        Ми готові надати пораду та обговорити будь-які питання.
      </SubTitle>
    </Container>
  );
};

export default HeroSectionTitle;
