import { SkillCardProps } from './SkillCard';

type SkillStack = {
  [k in 'frontend' | 'backend' | 'database' | 'devops' | 'cicd' | 'ecommerce' | 'others']: SkillCardProps;
};

const skillStack: SkillStack = {
  frontend: {
    field: 'Front-End',
    skills: [
      {
        name: 'HTML',
        score: 7,
      },
      {
        name: 'CSS',
        score: 7,
      },
      {
        name: 'Javascript',
        score: 8,
      },
      {
        name: 'Typescript',
        score: 8,
      },
      {
        name: 'React',
        score: 9,
      },
      {
        name: 'Next.js',
        score: 8,
      },
      {
        name: 'Sass/Scss',
        score: 8,
      },
      {
        name: 'Tailwind CSS',
        score: 8,
      },
      {
        name: 'Redux/Redux Tookit',
        score: 7,
      },
      {
        name: 'Unit Test/End-to-End Test',
        score: 6,
      },
    ],
  },
  backend: {
    field: 'Back-End',
    skills: [
      {
        name: 'Node.js',
        score: 6,
      },
      {
        name: 'Rust',
        score: 4,
      },
      {
        name: 'Python',
        score: 5,
      },
    ],
  },
  database: {
    field: 'DataBase',
    skills: [
      {
        name: 'PostgreSQL',
        score: 2,
      },
      {
        name: 'MongoDB',
        score: 2,
      },
    ],
  },
  devops: {
    field: 'DevOps',
    skills: [
      {
        name: 'Docker',
        score: 5,
      },
      {
        name: 'Heroku',
        score: 6,
      },
    ],
  },
  cicd: {
    field: 'CI/CD',
    skills: [
      {
        name: 'DroneCI',
        score: 5,
      },
    ],
  },
  ecommerce: {
    field: 'E-commerce',
    skills: [
      {
        name: 'Shopify',
        score: 8,
      },
      {
        name: 'BigCommerce',
        score: 7,
      },
    ],
  },
  others: {
    field: 'Others',
    skills: [
      {
        name: 'Project Management',
        score: 9,
      },
      {
        name: 'CRM - Exponea',
        score: 7,
      },
    ],
  },
};

export default skillStack;
