import { FC } from 'react';
import {
  Container,
  LinksListItem,
  LinksList,
  StyledLink,
  Title,
  TitleWrap,
} from './ServicesList.styled';
import { PagePaths } from '@/constants';
import { IProps } from './ServicesList.types';
// ----- components
import NavLinkGlow from '@GeneralComponents/NavLinkGlow';

const ServicesList: FC<IProps> = ({ onClick }) => {
  return (
    <Container>
      <TitleWrap>
        <Title>Послуги</Title>
      </TitleWrap>
      <LinksList>
        <LinksListItem>
          <StyledLink to={PagePaths.eCommerce} onClick={onClick}>
            Електронна комерція
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.webDevelopment} onClick={onClick}>
            Веб-розробка
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.applications} onClick={onClick}>
            iOS та Android додаатки
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.brandingAndIdentity} onClick={onClick}>
            Брендинг та айдентика
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.digitalization} onClick={onClick}>
            Цифровізація
          </StyledLink>
        </LinksListItem>
      </LinksList>
      <NavLinkGlow />
    </Container>
  );
};

export default ServicesList;
