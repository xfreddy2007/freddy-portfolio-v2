import { CategoryOptionType } from '@/src/assets/projectData/projectData';

type CategoryType = {
  id: CategoryOptionType;
  title: string;
};

const categorySelection: CategoryType[] = [
  {
    id: 'featureProjects',
    title: 'Feature Projects',
  },
  {
    id: 'frontEnd',
    title: 'Front-End',
  },
  {
    id: 'backEnd',
    title: 'Back-End',
  },
  {
    id: 'fullStack',
    title: 'Full-Stack',
  },
];

export default categorySelection;
