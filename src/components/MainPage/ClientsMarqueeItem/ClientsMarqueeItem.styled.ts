import styled from '@emotion/styled';

export const ShowClientDetailsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  margin-right: ${({ theme }) => theme.spacing(4)};
  background-color: transparent;
`;

export const ClientLogo = styled.img`
  width: 175px;
  height: 80px;
`;
