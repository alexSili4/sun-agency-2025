import { PagePaths, projects } from '@/constants';
import { useDynamicParam } from '@/hooks';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import ProjectDetails from '@ProjectDetailsPageComponents/ProjectDetails';

const ProjectDetailsPage: FC = () => {
  const projectId = useDynamicParam();
  const projectNumberId = Number(projectId);
  const targetProject = projects.find(({ id }) => id === projectNumberId);

  return targetProject ? (
    <ProjectDetails project={targetProject} />
  ) : (
    <Navigate to={PagePaths.notFound} />
  );
};

export default ProjectDetailsPage;
