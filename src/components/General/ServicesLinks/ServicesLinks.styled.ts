import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ServicesContainer = styled.div`
  width: 562px;
`;

export const ServicesTitleWrap = styled.div``;

export const ServicesTitle = styled.p``;

export const ServicesList = styled.ul``;

export const ServicesListItem = styled.li``;

export const ServiceLink = styled(Link)``;

export const ServiceLinkTitle = styled.span``;

export const LinkGlowImg = styled.img`
  transition: filter ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionDurationAndFunc};

  a:not(:is(:hover, :focus)) > & {
    filter: grayscale(100%);
    opacity: 0.2;
  }
`;
