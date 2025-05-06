import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 187 / 101;
  background-color: rgba(10, 10, 10, 0.07);
  padding: 0;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.white21};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.all};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-radius: 20px;
  }

  &:is(:hover, :focus) {
    box-shadow: inset 0px 0px 40px 2px rgba(255, 224, 214, 0.08);
  }
`;

export const Logo = styled.img`
  height: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 80px;
  }
`;
