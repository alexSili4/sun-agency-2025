import { FC } from 'react';
import {
  Section,
  Container,
  TextWrap,
  ClientsMarqueeWrap,
  Background,
} from './ClientsSection.styled';
import AnimatedMultiLineSubtitle from '@AnimationBlocks/AnimatedMultiLineSubtitle';
import SectionTitle from '@GeneralComponents/SectionTitle';
import { PagePaths, clients } from '@/constants';
import GlowingLink from '@GeneralComponents/GlowingLink';
import ClientsMarqueeContainer from '@MainPageComponents/ClientsMarqueeContainer';
import { splitArray } from '@/utils';

const ClientsSection: FC = () => {
  const { firstItem: firstClientsItem, secondItem: secondClientsItem } =
    splitArray(clients);

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
          <ClientsMarqueeWrap>
            <ClientsMarqueeContainer
              topClientsLine={firstClientsItem}
              bottomClientsLine={secondClientsItem}
            />
            <GlowingLink
              width={200}
              title='Всі клієнти'
              href={PagePaths.clients}
              isSubduedLighting
            />
          </ClientsMarqueeWrap>
        </Container>
      </Background>
    </Section>
  );
};

export default ClientsSection;