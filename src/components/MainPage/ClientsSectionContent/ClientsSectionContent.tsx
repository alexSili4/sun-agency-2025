import { FC } from 'react';
import {
  Container,
  ClientsMarqueeWrap,
  TextWrap,
} from './ClientsSectionContent.styled';
import AnimatedMultiLineSubtitle from '@AnimationBlocks/AnimatedMultiLineSubtitle';
import AnimatedSectionTitle from '@AnimationBlocks/AnimatedSectionTitle';
import { PagePaths, clients } from '@/constants';
import GlowingLink from '@GeneralComponents/GlowingLink';
import ClientsMarqueeContainer from '@MainPageComponents/ClientsMarqueeContainer';
import { splitArray } from '@/utils';

const ClientsSectionContent: FC = () => {
  const { firstItem: firstClientsItem, secondItem: secondClientsItem } =
    splitArray(clients);

  return (
    <Container>
      <TextWrap>
        <AnimatedSectionTitle text='Клієнти' isCenter />
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
        <GlowingLink width={200} title='Всі клієнти' href={PagePaths.clients} />
      </ClientsMarqueeWrap>
    </Container>
  );
};

export default ClientsSectionContent;
