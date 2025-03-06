import { navLinks, PagePaths, theme } from '@/constants';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Container, StyledLink, Title } from './Breadcrumbs.styled';

const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();
  const targetPath = navLinks.find(({ path }) => path === pathname);

  return (
    <Container>
      <StyledLink to={PagePaths.root}>Головна</StyledLink>
      <FaChevronRight size={theme.iconSizes.breadcrumbs} />
      <Title>{targetPath?.title}</Title>
    </Container>
  );
};

export default Breadcrumbs;
