import { FC } from 'react';
import {
  Section,
  Container,
  TextWrap,
  ClientsSliderWrap,
  Background,
} from './ClientsSection.styled';
import AnimatedMultiLineSubtitle from '@AnimationBlocks/AnimatedMultiLineSubtitle';
import SectionTitle from '@/components/General/SectionTitle';
import { PagePaths } from '@/constants';
import GlowingLink from '@GeneralComponents/GlowingLink';

const ClientsSection: FC = () => {
  return (
    <Section>
      <Background>
        <Container>
          <TextWrap>
            <SectionTitle text='Клієнти' isCenter />
            <AnimatedMultiLineSubtitle
              lines={[
                'Ми співпрацюємо з провідними бізнесами ',
                'для вирішення складних бізнес-завдань ',
              ]}
            />
          </TextWrap>
          <ClientsSliderWrap>
            {/* TODO add clients slider */}
            <GlowingLink
              width={200}
              title='Всі клієнти'
              href={PagePaths.clients}
              isSubduedLighting
            />
          </ClientsSliderWrap>
        </Container>
      </Background>
    </Section>
  );
};

export default ClientsSection;
