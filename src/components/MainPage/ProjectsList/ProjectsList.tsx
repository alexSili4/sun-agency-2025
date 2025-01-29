import { FC } from 'react';
import { IProps } from './ProjectsList.types';
import newProject from '@/images/projects/new-project.png';
import { List, ListItem } from './ProjectsList.styled';
import { getProjectPath } from '@/utils';
import { PagePaths } from '@/constants';
// ----- components
import ProjectCard from '@MainPageComponents/ProjectCard';

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
      <ListItem>
        <ProjectCard
          img={newProject}
          name={'У вас є проект?'}
          projectPath={PagePaths.contacts}
          tags={['співпраця']}
          year={2024}
          isNewProject
        />
      </ListItem>
    </List>
  );
};

export default ProjectsList;
