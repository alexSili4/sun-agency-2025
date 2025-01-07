import { PagePaths } from '@/constants';

const getProjectPath = (id: number): string => {
  const path = `${PagePaths.projects}/${id}`;

  return path;
};

export default getProjectPath;
