import atb from '@/images/projects/atb.png';
import qanabi from '@/images/projects/qanabi.png';
import maxBanus from '@/images/projects/max-banus.png';
import evaSport from '@/images/projects/eva-sport.png';

import { Projects } from '@/types/projects.types';

const projects: Projects = [
  {
    id: 2,
    name: 'Qanabi',
    year: 2023,
    tags: ['e-commerce', 'брендинг'],
    img: qanabi,
  },
  { id: 1, name: 'АТБ ver 3.0', year: 2023, tags: ['e-commerce'], img: atb },
  {
    id: 4,
    name: 'EVA Sport',
    year: 2023,
    tags: ['цифровізація'],
    img: evaSport,
  },
  { id: 3, name: 'MaxBanus', year: 2023, tags: ['e-commerce'], img: maxBanus },
];

export default projects;
