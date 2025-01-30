import { FC } from 'react';
import { IProps } from './ProjectDetails.types';
import { useIsDesk } from '@/hooks';
// ----- components
import AtbProjectDetails from '@AtbProjectDetailsComponents/AtbProjectDetails';

const ProjectDetails: FC<IProps> = ({ project }) => {
  const isDesk = useIsDesk();

  return <AtbProjectDetails project={project.details} isDesk={isDesk} />;
};

export default ProjectDetails;
