import styled from '@emotion/styled';
import { IStyledLinkProps } from './HeroSectionContactsInfoLink.types';

export const Link = styled.a<IStyledLinkProps>`
  flex-grow: ${({ isMaxWidth }) => (isMaxWidth ? 1 : 0)};
  color: #7a7a7a;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all},
    fill ${({ theme }) => theme.transitionDurationAndFunc.all};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.white};
  }

  & > svg {
    vertical-align: middle;
  }
`;
