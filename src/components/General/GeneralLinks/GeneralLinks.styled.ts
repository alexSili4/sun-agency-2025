import styled from '@emotion/styled';

export const Container = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */

  &:has(a:is(:hover, :focus)) a:not(:is(:hover, :focus)) {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;

export const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;

  /* gap: ${({ theme }) => theme.spacing(40)}px; */
`;

export const PrivacyPolicyLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: -0.14px;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  /* align-self: stretch; */
  /* display: flex; */
  /* align-items: center; */
`;
