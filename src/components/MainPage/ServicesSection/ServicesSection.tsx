import { FC } from 'react';
import { IProps } from './ServicesSection.types';

const ServicesSection: FC<IProps> = ({ servicesSectionRef }) => {
  return <section ref={servicesSectionRef}>ServicesSection</section>;
};

export default ServicesSection;
