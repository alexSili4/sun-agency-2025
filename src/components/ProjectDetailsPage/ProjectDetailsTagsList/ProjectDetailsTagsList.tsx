import { FC } from 'react';
import { IProps } from './ProjectDetailsTagsList.types';
import { List, ListItem } from './ProjectDetailsTagsList.styled';
import ProjectDetailsTag from '@ProjectDetailsPageComponents/ProjectDetailsTag';

const ProjectDetailsTagsList: FC<IProps> = ({ tags }) => {
  return (
    <List>
      {tags.map((tag, index) => (
        <ListItem key={index}>
          <ProjectDetailsTag tag={tag} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectDetailsTagsList;
