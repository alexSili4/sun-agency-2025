import styled from '@emotion/styled';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.dark};

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
