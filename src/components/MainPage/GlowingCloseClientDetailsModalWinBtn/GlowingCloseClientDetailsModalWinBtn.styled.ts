import styled from '@emotion/styled';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.dark};
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    border-color: transparent;
  }
`;
