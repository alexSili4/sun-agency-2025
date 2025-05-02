import { FC } from 'react';
import { IProps } from './ClientsSectionFiltersServicesList.types';
import ClientsSectionFiltersServiceDetails from '@ClientsPageComponents/ClientsSectionFiltersServiceDetails';
import {
  Container,
  Content,
  List,
  ListWrap,
  ListItem,
} from './ClientsSectionFiltersServicesList.styled';

const ClientsSectionFiltersServicesList: FC<IProps> = ({
  services,
  name,
  service,
  onServiceChange,
}) => {
  return (
    <Container>
      <Content>
        <ListWrap>
          <List>
            {services.map(({ label, value }, index) => {
              const isChecked = service === value;

              return (
                <ListItem key={index}>
                  <ClientsSectionFiltersServiceDetails
                    label={label}
                    value={value}
                    name={name}
                    isChecked={isChecked}
                    // onChange={onServiceChange}
                  />
                </ListItem>
              );
            })}
          </List>
        </ListWrap>
      </Content>
    </Container>
  );
};

export default ClientsSectionFiltersServicesList;
