import { FC } from 'react';
import { IProps } from './EmployeesSectionEmployeeDetails.types';
import {
  Container,
  Border,
  ImageWrap,
  JobTitle,
  Name,
  TextWrap,
  Avatar,
  NameWrap,
} from './EmployeesSectionEmployeeDetails.styled';
import employeeBorder from '@/images/about/employee-border.png';

const EmployeesSectionEmployeeDetails: FC<IProps> = ({
  avatar,
  jobTitle,
  name,
}) => {
  return (
    <Container>
      <TextWrap>
        <NameWrap>
          <Name>{name}</Name>
        </NameWrap>
        <JobTitle>{jobTitle}</JobTitle>
      </TextWrap>
      <ImageWrap>
        <Avatar src={avatar} alt={name} />
      </ImageWrap>
      <Border src={employeeBorder} alt='Рамка' />
    </Container>
  );
};

export default EmployeesSectionEmployeeDetails;
