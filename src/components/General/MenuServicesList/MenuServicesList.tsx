import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  LinksListItem,
  LinksList,
  StyledLink,
  Title,
  Button,
  IconWrap,
} from './MenuServicesList.styled';
import { theme } from '@/constants';
import { IProps } from './MenuServicesList.types';
import { FaChevronUp } from 'react-icons/fa';
import { NumberOrNull } from '@/types/types';
// ----- components
import NavLinkGlow from '@GeneralComponents/MenuNavLinkGlow';

const MenuServicesList: FC<IProps> = ({ onClick, servicesLinks }) => {
  const [isShowList, setIsShowList] = useState<boolean>(true);
  const [listScrollHeight, setListScrollHeight] = useState<NumberOrNull>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scrollHeight = listRef.current?.scrollHeight;

    if (scrollHeight) {
      setListScrollHeight(scrollHeight);
    }
  }, []);

  const toggleIsShowList = () => {
    setIsShowList((prevState) => !prevState);
  };

  const onServicesListBtnClick = () => {
    toggleIsShowList();
  };

  return (
    <Container>
      <Button type='button' onClick={onServicesListBtnClick}>
        <Title>Послуги</Title>
        <IconWrap isShowList={isShowList}>
          <FaChevronUp size={theme.iconSizes.servicesListBtn} />
        </IconWrap>
      </Button>
      <LinksList
        ref={listRef}
        isShowList={isShowList}
        scrollHeight={listScrollHeight}
      >
        {servicesLinks.map(({ path, title }) => (
          <LinksListItem>
            <StyledLink to={path} onClick={onClick}>
              {title}
            </StyledLink>
          </LinksListItem>
        ))}
      </LinksList>
      <NavLinkGlow />
    </Container>
  );
};

export default MenuServicesList;
