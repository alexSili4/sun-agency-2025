import styled from '@emotion/styled';
import { IStyledPrivacyPolicyLinkProps } from './GeneralLinks.types';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 100%;
  }
`;

export const LinksWrap = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(5)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    width: 39vw;
  }
`;

export const PrivacyPolicyLink = styled.a<IStyledPrivacyPolicyLinkProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: -0.14px;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus)) > &:not(:is(:hover, :focus)) {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ deskLinkPadding }) => deskLinkPadding}px;
    padding-bottom: ${({ deskLinkPadding }) => deskLinkPadding}px;
  }
`;
