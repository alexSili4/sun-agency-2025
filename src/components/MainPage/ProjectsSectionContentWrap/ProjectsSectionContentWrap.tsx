import { FC } from 'react';
import { Container, IProps } from './ProjectsSectionContentWrap.styled';

const ProjectsSectionContentWrap: FC<IProps> = ({
  children,
  isProjectsListWrap = false,
}) => {
  return (
    <Container isProjectsListWrap={isProjectsListWrap}>{children}</Container>
  );
};

export default ProjectsSectionContentWrap;
