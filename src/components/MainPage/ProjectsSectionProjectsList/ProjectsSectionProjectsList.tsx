import { FC } from 'react';
import { IProps } from './ProjectsSectionProjectsList.types';
import newProjectDesk from '@/images/main/projects/new-project-desk.png';
import newProjectMob from '@/images/main/projects/new-project-mob.png';

import {
  Container,
  List,
  ListItem,
} from './ProjectsSectionProjectsList.styled';
import { getProjectPath } from '@/utils';
import { PagePaths } from '@/constants';
// ----- components
import ProjectsSectionProjectCard from '@MainPageComponents/ProjectsSectionProjectCard';
import AnimatedProjectsSectionGlowingLink from '@AnimatedMainPageComponents/AnimatedProjectsSectionGlowingLink';
import { useIsDesk } from '@/hooks';

const ProjectsSectionProjectsList: FC<IProps> = ({
  projects,
  nextSectionInView,
}) => {
  const isDesk = useIsDesk();
  const newProjectImg = isDesk ? newProjectDesk : newProjectMob;

  return (
    <Container>
      <List>
        {projects.map(
          ({ id, img: { desk: deskImg, mob: mobImg }, name, tags, year }) => {
            const projectPath = getProjectPath(id);
            const img = isDesk ? deskImg : mobImg;

            return (
              <ListItem key={id}>
                <ProjectsSectionProjectCard
                  img={img}
                  name={name}
                  projectPath={projectPath}
                  tags={tags}
                  year={year}
                />
              </ListItem>
            );
          }
        )}
        <ListItem>
          <ProjectsSectionProjectCard
            img={newProjectImg}
            name={'У вас є проект?'}
            projectPath={PagePaths.contacts}
            tags={['співпраця']}
            year={2024}
            isNewProject
          />
        </ListItem>
      </List>
      <AnimatedProjectsSectionGlowingLink
        nextSectionInView={nextSectionInView}
        isHiddenOnDesk
        isCenter
      />
    </Container>
  );
};

export default ProjectsSectionProjectsList;
