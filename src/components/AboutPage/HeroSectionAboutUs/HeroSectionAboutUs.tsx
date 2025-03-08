import { FC } from 'react';
import HeroSectionBusinessMetrics from '@AboutPageComponents/HeroSectionBusinessMetrics';
import {
  Container,
  Content,
  Text,
  TextWrap,
  Title,
} from './HeroSectionAboutUs.styled';
import { IProps } from './HeroSectionAboutUs.types';

const HeroSectionAboutUs: FC<IProps> = ({ metrics }) => {
  return (
    <Container>
      <Content>
        <TextWrap>
          <Title>Що варто знати про нас</Title>
          <Text>
            З 2011 року ми допомагаємо бізнесам зростати, створюючи сайти,
            бренди та діджиталізуючи їх процеси. Маємо вагомий досвід у рітейлі:
            інтернет-магазини, сайти супермаркетів, промо-сайти та додатки для
            бізнесу. Нам довіряють топові українські та міжнародні компанії і
            бренди
          </Text>
        </TextWrap>
        <HeroSectionBusinessMetrics metrics={metrics} />
      </Content>
    </Container>
  );
};

export default HeroSectionAboutUs;
