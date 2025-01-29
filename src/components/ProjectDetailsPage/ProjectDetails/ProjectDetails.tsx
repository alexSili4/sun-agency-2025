import { FC } from 'react';
import { IProps } from './ProjectDetails.types';
// ----- components
import AtbProjectDetails from '@AtbProjectDetailsComponents/AtbProjectDetails';

const ProjectDetails: FC<IProps> = ({ project }) => {
  return <AtbProjectDetails project={project.details} />;
};

export default ProjectDetails;
