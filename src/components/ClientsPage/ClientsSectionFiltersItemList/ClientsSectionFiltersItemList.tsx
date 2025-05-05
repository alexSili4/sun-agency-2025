import { FC } from 'react';
import { IProps } from './ClientsSectionFiltersItemList.types';
import ClientsSectionFiltersItemFilterDetails from '@ClientsPageComponents/ClientsSectionFiltersItemFilterDetails';
import {
  Container,
  Content,
  List,
  ListWrap,
  ListItem,
  ListContainer,
  ContentWrap,
} from './ClientsSectionFiltersItemList.styled';

const ClientsSectionFiltersItemList: FC<IProps> = ({
  filters,
  name,
  currentFilter,
  onServiceChange,
  contentRef,
  isShow,
  height,
  maxHeight,
}) => {
  return (
    <Container isShow={isShow} height={height}>
      <ContentWrap ref={contentRef}>
        <Content>
          <ListContainer maxHeight={maxHeight}>
            <ListWrap maxHeight={maxHeight}>
              <List>
                {filters.map(({ label, value }, index) => {
                  const isChecked = currentFilter === value;

                  return (
                    <ListItem key={index}>
                      <ClientsSectionFiltersItemFilterDetails
                        label={label}
                        value={value}
                        name={name}
                        isChecked={isChecked}
                        onChange={onServiceChange}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </ListWrap>
          </ListContainer>
        </Content>
      </ContentWrap>
    </Container>
  );
};

export default ClientsSectionFiltersItemList;
