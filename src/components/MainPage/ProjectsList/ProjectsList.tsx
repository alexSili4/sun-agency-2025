import { FC } from 'react';
import { IProps } from './ProjectsList.types';
import ProjectCard from '@MainPageComponents/ProjectCard';
import { List, ListItem } from './ProjectsList.styled';
import { getProjectPath } from '@/utils';

const ProjectsList: FC<IProps> = ({ projects }) => {
  return (
    <List>
      {projects.map(({ id, img, name, tags, year }) => {
        const projectPath = getProjectPath(id);

        return (
          <ListItem key={id}>
            <ProjectCard
              img={img}
              name={name}
              projectPath={projectPath}
              tags={tags}
              year={year}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ProjectsList;
