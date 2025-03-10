import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './ServicesSectionServiceItem.types';
import {
  Container,
  Image,
  Title,
  DetailsWrap,
  TitleWrap,
  Number,
  GlowImg,
} from './ServicesSectionServiceItem.styled';
import serviceGlow from '@/images/main/services/service-glow.png';
// ----- components
import ServicesSectionTagsList from '@MainPageComponents/ServicesSectionTagsList';

const ServicesSectionServiceItem: FC<IProps> = ({
  path,
  icon,
  tags,
  title,
  number,
}) => {
  return (
    <Link to={path}>
      <Container>
        <TitleWrap>
          <Number>{number}</Number>
          <Title>{title}</Title>
        </TitleWrap>
        <DetailsWrap>
          <ServicesSectionTagsList tags={tags} />
          <Image src={icon} />
        </DetailsWrap>
        <GlowImg src={serviceGlow} />
      </Container>
    </Link>
  );
};

export default ServicesSectionServiceItem;
