import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc.all},
    opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  a:not(:is(:hover, :focus)) > div > div > & {
    transform: translateX(100px);
    opacity: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const ListItem = styled.li``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const Tag = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Marker = styled.div`
  width: 8px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;
