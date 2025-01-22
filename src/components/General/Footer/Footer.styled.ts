import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(146)};
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;
`;

export const SectionBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 114px;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.black},
    ${({ theme }) => theme.colors.darkBg} 100%
  );
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
