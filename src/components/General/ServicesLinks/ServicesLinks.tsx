import { FC } from 'react';
import {
  ServiceLink,
  ServiceLinkTitle,
  ServicesContainer,
  ServicesList,
  ServicesListItem,
  ServicesTitle,
  ServicesTitleWrap,
  LinkGlowImg,
} from './ServicesLinks.styled';
import { PagePaths } from '@/constants';
import linkGlow from '@/images/general/link-glow.png';
import { IProps } from './ServicesLinks.types';

const ServicesLinks: FC<IProps> = ({ onClick }) => {
  return (
    <ServicesContainer>
      <ServicesTitleWrap>
        <ServicesTitle>Послуги</ServicesTitle>
      </ServicesTitleWrap>
      <ServicesList>
        <ServicesListItem>
          <ServiceLink to={PagePaths.eCommerce} onClick={onClick}>
            <ServiceLinkTitle>Електронна комерція</ServiceLinkTitle>
            <LinkGlowImg src={linkGlow} />
          </ServiceLink>
        </ServicesListItem>
        <ServicesListItem>
          <ServiceLink to={PagePaths.webDevelopment} onClick={onClick}>
            <ServiceLinkTitle>Веб-розробка</ServiceLinkTitle>
            <LinkGlowImg src={linkGlow} />
          </ServiceLink>
        </ServicesListItem>
        <ServicesListItem>
          <ServiceLink to={PagePaths.applications} onClick={onClick}>
            <ServiceLinkTitle>iOS та Android додаатки </ServiceLinkTitle>
            <LinkGlowImg src={linkGlow} />
          </ServiceLink>
        </ServicesListItem>
        <ServicesListItem>
          <ServiceLink to={PagePaths.brandingAndIdentity} onClick={onClick}>
            <ServiceLinkTitle>Брендинг та айдентика</ServiceLinkTitle>
            <LinkGlowImg src={linkGlow} />
          </ServiceLink>
        </ServicesListItem>
        <ServicesListItem>
          <ServiceLink to={PagePaths.digitalization} onClick={onClick}>
            <ServiceLinkTitle>Цифровізація</ServiceLinkTitle>
            <LinkGlowImg src={linkGlow} />
          </ServiceLink>
        </ServicesListItem>
      </ServicesList>
    </ServicesContainer>
  );
};

export default ServicesLinks;
