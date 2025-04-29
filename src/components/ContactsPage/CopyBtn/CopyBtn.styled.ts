import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    color: #7a7a7a;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc.all};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;
