import { FC } from 'react';
import { Section } from './ProjectsSection.styled';
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProjectsSection: FC = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: `.qwerty`,
  //       start: 'top center',
  //       end: 'bottom bottom',
  //       scrub: true,
  //       markers: true,
  //       // pin: true,
  //     },
  //   });

  //   tl.fromTo(
  //     `.${ClassNames.projects}`,
  //     {
  //       y: 0,
  //     },
  //     { y: -1000 }
  //   );
  // }, []);

  return (
    <Section>
      <ProjectsSectionContent />
    </Section>
  );
};

export default ProjectsSection;
