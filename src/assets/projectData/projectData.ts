type ProjectDataTypes = {
  id: string;
  name: string;
  profilePic: string;
  squareProfilePic: string;
  category: Array<'featureProjects' | 'frontEnd' | 'backEnd' | 'fullStack'>;
  genre: string[];
  description: string;
  link?: string;
  github: string;
};

const projectData: ProjectDataTypes[] = [
  {
    id: 'civil-tools',
    name: 'Civil & Structural tools',
    profilePic: '/src/assets/projectData/projectprofilepic/civil-tools-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/civil-tools.png',
    category: ['featureProjects', 'frontEnd'],
    genre: ['typescript', 'next.js'],
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, officia fuga. Labore pariatur quia modi commodi necessitatibus, at nostrum voluptate, eius illo nesciunt sed recusandae, voluptatum odit quas esse iste.',
    link: 'https://civil-structural-tools.herokuapp.com/',
    github: 'https://github.com/xfreddy2007/civil-structural-tools',
  },
  {
    id: 'burger-builder',
    name: 'Burger builder',
    profilePic: '/src/assets/projectData/projectprofilepic/burger-builder-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/burger-builder.png',
    category: ['featureProjects', 'frontEnd'],
    genre: ['javascript'],
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, officia fuga. Labore pariatur quia modi commodi necessitatibus, at nostrum voluptate, eius illo nesciunt sed recusandae, voluptatum odit quas esse iste.',
    link: 'https://burger-builder-a6e21.web.app/',
    github: 'https://github.com/xfreddy2007/burger-builder',
  },
  {
    id: 'road-race',
    name: 'Road Race game',
    profilePic: '/src/assets/projectData/projectprofilepic/road-race-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/road-race.png',
    category: ['backEnd'],
    genre: ['rust'],
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, officia fuga. Labore pariatur quia modi commodi necessitatibus, at nostrum voluptate, eius illo nesciunt sed recusandae, voluptatum odit quas esse iste.',
    link: 'https://civil-structural-tools.herokuapp.com/',
    github: 'https://github.com/xfreddy2007/Road-race',
  },
];

export default projectData;
