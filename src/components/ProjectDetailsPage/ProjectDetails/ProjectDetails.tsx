import { FC } from 'react';
import { IProps } from './ProjectDetails.types';
import AtbProjectDetails from '@ProjectDetailsPageComponents/AtbProjectDetails';

const ProjectDetails: FC<IProps> = ({ project }) => {
  return (
    <div>
      <AtbProjectDetails project={project.details} />
    </div>
  );
};

export default ProjectDetails;
