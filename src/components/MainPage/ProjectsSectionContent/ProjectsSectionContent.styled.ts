import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.projectsSectionContent};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
`;
