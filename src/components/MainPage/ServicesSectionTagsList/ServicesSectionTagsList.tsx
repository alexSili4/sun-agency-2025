import { FC } from 'react';
import { IProps } from './ServicesSectionTagsList.types';
import { getIsLastIndex } from '@/utils';
import {
  List,
  Container,
  ListItem,
  Marker,
  Tag,
} from './ServicesSectionTagsList.styled';

const ServicesSectionTagsList: FC<IProps> = ({ tags }) => {
  return (
    <List>
      {tags.map((tag, index) => {
        const isLastIndex = getIsLastIndex({ index, array: tags });
        const tagComponent = <Tag>{tag}</Tag>;

        return (
          <ListItem key={index}>
            <Container>
              {isLastIndex ? (
                tagComponent
              ) : (
                <>
                  {tagComponent}
                  <Marker></Marker>
                </>
              )}
            </Container>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ServicesSectionTagsList;
