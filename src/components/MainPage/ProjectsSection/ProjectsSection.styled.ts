import styled from '@emotion/styled';
import nexSectionBg from '@/images/main/projects/next-section-bg.png';

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const NexSectionBgWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 2 / 1;
  background-image: url(${nexSectionBg});
  background-size: calc(100% + 100px + 100px) auto;
  background-position: left 50% top 0;
  background-repeat: no-repeat;
`;
