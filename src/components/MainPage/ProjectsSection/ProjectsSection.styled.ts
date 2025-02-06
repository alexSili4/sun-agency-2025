import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const NexSectionBg = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: calc(100% + 100px + 100px);
  max-width: none;
  height: auto;
  transform: translateX(-50%) translateY(50%);
`;
