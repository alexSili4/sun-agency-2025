import styled from '@emotion/styled';

export const StyledFooter = styled.footer``;

export const MainInfoWrap = styled.div``;

export const GeneralInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinksWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(90)};
`;
