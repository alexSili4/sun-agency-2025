import { FC } from 'react';
import { Container, Title } from './FooterContacts.styled';
import { PagePaths } from '@/constants';
import glowingLink from '@/lottiefiles/glow/glowing-link.json';
// ----- components
import GlowingLink from '@GeneralComponents/GlowingLink';

const FooterContacts: FC = () => {
  return (
    <Container>
      <Title>Маєте цікавий проект? Ми будемо раді почути про нього</Title>
      <GlowingLink
        width={200}
        title='Напишіть нам'
        href={PagePaths.contacts}
        animationData={glowingLink}
        glowHeight={69}
        glowWidth={214}
      />
    </Container>
  );
};

export default FooterContacts;
