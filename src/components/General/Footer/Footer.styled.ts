import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(146)};
  /* TODO fix */
  background-color: greenyellow;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(24)};
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  background-color: ${({ theme }) => theme.colors.body};
  padding-top: ${({ theme }) => theme.spacing(17)};
`;
