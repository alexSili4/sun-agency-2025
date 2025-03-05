import { FC } from 'react';
import { IProps } from './EmployeesSectionList.types';
import EmployeesSectionEmployeeDetails from '@AboutPageComponents/EmployeesSectionEmployeeDetails';
import { List, ListItem } from './EmployeesSectionList.styled';

const EmployeesSectionList: FC<IProps> = ({ employees }) => {
  return (
    <List>
      {employees.map(({ avatar, jobTitle, name }, index) => (
        <ListItem key={index}>
          <EmployeesSectionEmployeeDetails
            avatar={avatar}
            jobTitle={jobTitle}
            name={name}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default EmployeesSectionList;
