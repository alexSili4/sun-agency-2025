import { FC } from 'react';
import { IProps } from './ClientDetails.types';
import {
  Container,
  InfoWrap,
  Logo,
  Text,
  TextWrap,
  WebsiteAddress,
} from './ClientDetails.styled';
import ClientGeneralInfo from '@MainPageComponents/ClientGeneralInfo';
import ClientProjects from '@MainPageComponents/ClientProjects';

const ClientDetails: FC<IProps> = ({
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
        <Logo src={logo} />
        <TextWrap>
          <WebsiteAddress>{websiteAddress}</WebsiteAddress>
          <Text>{text}</Text>
        </TextWrap>
        <ClientGeneralInfo projects={projects} years={years} />
      </InfoWrap>
      <ClientProjects projects={images} />
    </Container>
  );
};

export default ClientDetails;
