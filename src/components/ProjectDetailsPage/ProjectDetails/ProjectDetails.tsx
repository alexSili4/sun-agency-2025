import { FC } from 'react';
import { IProps } from './ProjectDetails.types';
import AtbProjectDetails from '@ProjectDetailsPageComponents/AtbProjectDetails';

const ProjectDetails: FC<IProps> = () => {
  return (
    <div>
      <AtbProjectDetails />
    </div>
  );
};

export default ProjectDetails;
