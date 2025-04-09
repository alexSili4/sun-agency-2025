import { FC } from 'react';
import { IProps } from './ClientsSectionClientDetails.types';
import {
  Container,
  InfoWrap,
  Logo,
  Text,
  TextWrap,
  WebsiteAddress,
} from './ClientsSectionClientDetails.styled';
// ----- components
import ClientsSectionClientGeneralInfo from '@MainPageComponents/ClientsSectionClientGeneralInfo';
import ClientsSectionClientProjects from '@MainPageComponents/ClientsSectionClientProjects';

const ClientsSectionClientDetails: FC<IProps> = ({
  images,
  logo,
  projects,
  text,
  websiteAddress,
  years,
}) => {
  return (
    <Container>
      <InfoWrap>
        <Logo src={logo} alt='' />
        <TextWrap>
          <WebsiteAddress>{websiteAddress}</WebsiteAddress>
          <Text>{text}</Text>
        </TextWrap>
        <ClientsSectionClientGeneralInfo projects={projects} years={years} />
      </InfoWrap>
      <ClientsSectionClientProjects projects={images} />
    </Container>
  );
};

export default ClientsSectionClientDetails;
