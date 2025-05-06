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
// ----- components
import ClientDetailsGeneralInfo from '@GeneralComponents/ClientDetailsGeneralInfo';
import ClientDetailsProjects from '@GeneralComponents/ClientDetailsProjects';

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
        <Logo src={logo} alt='' />
        <TextWrap>
          <WebsiteAddress>{websiteAddress}</WebsiteAddress>
          <Text>{text}</Text>
        </TextWrap>
        <ClientDetailsGeneralInfo projects={projects} years={years} />
      </InfoWrap>
      <ClientDetailsProjects projects={images} />
    </Container>
  );
};

export default ClientDetails;
