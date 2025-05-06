import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const ListItem = styled.li``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Projects = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.16;
  text-transform: lowercase;
  filter: drop-shadow(1px 1px 4px rgba(255, 225, 67, 0.2));
  text-shadow: 0px 0px 0px #a34400, 1px 0px 0px #a34400, 1px 1px 0px #a34400,
    0px 1px 0px #a34400, -1px 1px 0px #a34400, -1px 0px 0px #a34400,
    -1px -1px 0px #a34400, 0px -1px 0px #a34400, 1px -1px 0px #a34400;
`;

export const Years = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.16;
  text-transform: lowercase;
  filter: drop-shadow(1px 1px 4px rgba(255, 225, 67, 0.2));
  text-shadow: 0px 0px 0px #a34400, 1px 0px 0px #a34400, 1px 1px 0px #a34400,
    0px 1px 0px #a34400, -1px 1px 0px #a34400, -1px 0px 0px #a34400,
    -1px -1px 0px #a34400, 0px -1px 0px #a34400, 1px -1px 0px #a34400;
`;

export const Title = styled.p`
  width: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: lowercase;
`;
