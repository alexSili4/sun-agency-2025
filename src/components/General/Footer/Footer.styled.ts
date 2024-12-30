import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(146)};
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;
`;

export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(24)};
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  padding-top: ${({ theme }) => theme.spacing(17)};
  background-color: inherit;
`;
