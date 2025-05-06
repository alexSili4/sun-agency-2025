import { theme } from '@/constants';
import { FC } from 'react';
import pageBgDesk from '@/images/clients/page-bg-desk.jpg';
import pageBgMob from '@/images/clients/page-bg-mob.png';
import { Container, BgPicture, Content } from './ClientsBg.styled';

const ClientsBg: FC = () => {
  const deliciousMedia = `(min-width: ${theme.breakpoints.desktop}px)`;

  return (
    <Container>
      <Content>
        <BgPicture>
          <source srcSet={pageBgDesk} media={deliciousMedia} />
          <img src={pageBgMob} alt='Декоративне зображення' />
        </BgPicture>
      </Content>
    </Container>
  );
};

export default ClientsBg;
