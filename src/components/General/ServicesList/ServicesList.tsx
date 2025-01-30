import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  LinksListItem,
  LinksList,
  StyledLink,
  Title,
  Button,
  IconWrap,
} from './ServicesList.styled';
import { PagePaths, theme } from '@/constants';
import { IProps } from './ServicesList.types';
// ----- components
import NavLinkGlow from '@GeneralComponents/NavLinkGlow';
import { FaChevronUp } from 'react-icons/fa';
import { NumberOrNull } from '@/types/types';

const ServicesList: FC<IProps> = ({ onClick }) => {
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
        <LinksListItem>
          <StyledLink to={PagePaths.eCommerce} onClick={onClick}>
            Електронна комерція
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.webDevelopment} onClick={onClick}>
            Веб-розробка
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.applications} onClick={onClick}>
            iOS та Android додаатки
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.brandingAndIdentity} onClick={onClick}>
            Брендинг та айдентика
          </StyledLink>
        </LinksListItem>
        <LinksListItem>
          <StyledLink to={PagePaths.digitalization} onClick={onClick}>
            Цифровізація
          </StyledLink>
        </LinksListItem>
      </LinksList>
      <NavLinkGlow />
    </Container>
  );
};

export default ServicesList;
