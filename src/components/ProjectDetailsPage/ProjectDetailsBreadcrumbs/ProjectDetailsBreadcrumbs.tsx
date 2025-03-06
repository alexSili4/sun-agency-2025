import { FC } from 'react';
import { IProps } from './ProjectDetailsBreadcrumbs.types';
import { FaChevronRight } from 'react-icons/fa';
import { PagePaths, theme } from '@/constants';
import {
  Container,
  Name,
  StyledLink,
} from './ProjectDetailsBreadcrumbs.styled';

const ProjectDetailsBreadcrumbs: FC<IProps> = ({ name }) => {
  return (
    <Container>
      <StyledLink to={PagePaths.projects}>Всі кейси</StyledLink>
      <FaChevronRight size={theme.iconSizes.breadcrumbs} />
      <Name>{name}</Name>
    </Container>
  );
};

export default ProjectDetailsBreadcrumbs;
