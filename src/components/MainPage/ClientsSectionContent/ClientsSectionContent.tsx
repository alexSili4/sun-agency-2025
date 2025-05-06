import { FC } from 'react';
import {
  Container,
  ClientsMarqueeWrap,
  TextWrap,
} from './ClientsSectionContent.styled';
import { PagePaths } from '@/constants';
import { splitArray } from '@/utils';
import glowingLink from '@/lottiefiles/glow/glowing-link.json';
// ----- components
import AnimatedClientsSectionSubtitle from '@AnimatedMainPageComponents/AnimatedClientsSectionSubtitle';
import AnimatedSectionTitle from '@AnimationBlocks/AnimatedSectionTitle';
import GlowingLink from '@GeneralComponents/GlowingLink';
import ClientsSectionMarqueeContainer from '@MainPageComponents/ClientsSectionMarqueeContainer';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import { IProps } from './ClientsSectionContent.types';

const ClientsSectionContent: FC<IProps> = ({ clients }) => {
  const { firstItem: firstClientsItem, secondItem: secondClientsItem } =
    splitArray(clients);

  const subtitleFirstLine = 'Ми співпрацюємо з провідними бізнесами';
  const subtitleSecondLine = 'для вирішення складних бізнес-завдань';

  const fullSubtitle = `${subtitleFirstLine} ${subtitleSecondLine}`;

  return (
    <Container>
      <TextWrap>
        <AnimatedSectionTitle text='Клієнти' isCenter />
        <AnimatedClientsSectionSubtitle
          lines={[subtitleFirstLine, subtitleSecondLine]}
          isHiddenOnMobile
        />
        <AnimatedSectionSubtitle text={fullSubtitle} isHiddenOnDesk isCenter />
      </TextWrap>
      <ClientsMarqueeWrap>
        <ClientsSectionMarqueeContainer
          topClientsLine={firstClientsItem}
          bottomClientsLine={secondClientsItem}
        />
        <GlowingLink
          width={200}
          title='Всі клієнти'
          href={PagePaths.clients}
          animationData={glowingLink}
          glowHeight={69}
          glowWidth={214}
        />
      </ClientsMarqueeWrap>
    </Container>
  );
};

export default ClientsSectionContent;
