export type CategoryOptionType = 'featureProjects' | 'frontEnd' | 'backEnd' | 'fullStack';

type ProjectDataTypes = {
  id: string;
  name: string;
  profilePic: string;
  squareProfilePic: string;
  category: Array<CategoryOptionType>;
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
    genre: ['typescript', 'next.js', 'tailwind', 'reacthooks', 'css-in-js'],
    description: 'A place where has a bunch of helper calculation tools for civil and structural engineers.',
    link: 'https://civil-structural-tools.herokuapp.com/',
    github: 'https://github.com/xfreddy2007/civil-structural-tools',
  },
  {
    id: 'burger-builder',
    name: 'Burger builder',
    profilePic: '/src/assets/projectData/projectprofilepic/burger-builder-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/burger-builder.png',
    category: ['featureProjects', 'frontEnd'],
    genre: ['javascript', 'redux', 'reacthooks', 'firebase'],
    description: 'A burger builder which you can order your customized burgers and sent orders to the backend.',
    link: 'https://burger-builder-a6e21.web.app/',
    github: 'https://github.com/xfreddy2007/burger-builder',
  },
  {
    id: 'road-race',
    name: 'Road Race game',
    profilePic: '/src/assets/projectData/projectprofilepic/road-race-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/road-race.png',
    category: ['featureProjects', 'backEnd'],
    genre: ['rust'],
    description: 'A road dodging simple game made of Rust programming laguage and Rusty game engine.',
    github: 'https://github.com/xfreddy2007/Road-race',
  },
  {
    id: 'smart-brain',
    name: 'Smart Brain Detector',
    profilePic: '/src/assets/projectData/projectprofilepic/smart-brain-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/smart-brain.png',
    category: ['featureProjects', 'fullStack'],
    genre: ['javascript', 'react', 'node.js', 'postgresql'],
    description: 'An App which you can detect your face within an image.',
    link: 'https://smart-brain-freddy.herokuapp.com',
    github: 'https://github.com/xfreddy2007/Smart-brain',
  },
  {
    id: 'robo-friends',
    name: 'Robo Friends',
    profilePic: '/src/assets/projectData/projectprofilepic/robo-friends-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/robo-friends.png',
    category: ['frontEnd'],
    genre: ['javascript', 'react'],
    description: 'An App which you can search your favorite robot friend.',
    link: 'https://xfreddy2007.github.io/robofriends-project/',
    github: 'https://github.com/xfreddy2007/robofriends-project',
  },
  {
    id: 'pong-game',
    name: 'Pong Game',
    profilePic: '/src/assets/projectData/projectprofilepic/pong-game-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/pong-game.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A web base ping-pong game.',
    link: 'https://xfreddy2007.github.io/Pong-Game/',
    github: 'https://github.com/xfreddy2007/Pong-Game',
  },
  {
    id: 'paint-clone',
    name: 'Paint Clone',
    profilePic: '/src/assets/projectData/projectprofilepic/paint-clone-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/paint-clone.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A web base customized paint board.',
    link: 'https://xfreddy2007.github.io/Paint-Clone/',
    github: 'https://github.com/xfreddy2007/Paint-Clone',
  },
  {
    id: 'calculator',
    name: 'Calculator',
    profilePic: '/src/assets/projectData/projectprofilepic/calculator-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/calculator.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A calculator built from scratch.',
    link: 'https://xfreddy2007.github.io/Calculator/',
    github: 'https://github.com/xfreddy2007/Calculator',
  },
  {
    id: 'drag-n-drop-board',
    name: "Drag 'n' Drop Board",
    profilePic: '/src/assets/projectData/projectprofilepic/drag-n-drop-board-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/drag-n-drop-board.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Create a board that can drag items within any column, and also modify text with that item.',
    link: 'https://xfreddy2007.github.io/Drag-n-Drop-Board/',
    github: 'https://github.com/xfreddy2007/Drag-n-Drop-Board',
  },
  {
    id: 'math-sprint-game',
    name: 'Math Sprint Game',
    profilePic: '/src/assets/projectData/projectprofilepic/math-sprint-game-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/math-sprint-game.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Create a Math game and it will store best scores in localstorage.',
    link: 'https://xfreddy2007.github.io/Math-Sprint-Game/',
    github: 'https://github.com/xfreddy2007/Math-Sprint-Game',
  },
  {
    id: 'nasa-astronomy-picture-of-the-day',
    name: 'NASA Astronomy Picture of the Day',
    profilePic: '/src/assets/projectData/projectprofilepic/nasa-astronomy-picture-of-the-day-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/nasa-astronomy-picture-of-the-day.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'It takes the NASA API to present the APOD API and can store favorites images in localstorage.',
    link: 'https://xfreddy2007.github.io/NASA-Astronomy-Picture-of-the-Day/',
    github: 'https://github.com/xfreddy2007/NASA-Astronomy-Picture-of-the-Day',
  },
  {
    id: 'spock-rock-game',
    name: 'Spock Rock Game',
    profilePic: '/src/assets/projectData/projectprofilepic/spock-rock-game-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/spock-rock-game.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Using browser to play Rock-Paper-Scissors-Lizard-Spock.',
    link: 'https://xfreddy2007.github.io/Spock-Rock-Game/',
    github: 'https://github.com/xfreddy2007/Spock-Rock-Game',
  },
  {
    id: 'form-validator',
    name: 'Form Validator',
    profilePic: '/src/assets/projectData/projectprofilepic/form-validator-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/form-validator.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A page for user form and can be further implemented with back-end projects.',
    link: 'https://xfreddy2007.github.io/Form-Validator/',
    github: 'https://github.com/xfreddy2007/Form-Validator',
  },
  {
    id: 'video-player',
    name: 'Video Player',
    profilePic: '/src/assets/projectData/projectprofilepic/video-player-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/video-player.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A Self-build UI for video player.',
    link: 'https://xfreddy2007.github.io/Video-Player/',
    github: 'https://github.com/xfreddy2007/Video-Player',
  },
  {
    id: 'bookmarks',
    name: 'Bookmarks',
    profilePic: '/src/assets/projectData/projectprofilepic/bookmarks-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/bookmarks.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A bookmark website to store preference website links.',
    link: 'https://xfreddy2007.github.io/Bookmarks/',
    github: 'https://github.com/xfreddy2007/Bookmarks',
  },
  {
    id: 'custom-countdown',
    name: 'Custom Countdown',
    profilePic: '/src/assets/projectData/projectprofilepic/custom-countdown-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/custom-countdown.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Do a countdown clock and it will store the countdown information in localstorage as well.',
    link: 'https://xfreddy2007.github.io/Custom-Countdown/',
    github: 'https://github.com/xfreddy2007/Custom-Countdown',
  },
  {
    id: 'music-player',
    name: 'Music Player',
    profilePic: '/src/assets/projectData/projectprofilepic/music-player-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/music-player.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A Music Player making from scratch.',
    link: 'https://xfreddy2007.github.io/Music-Player/',
    github: 'https://github.com/xfreddy2007/Music-Player',
  },
  {
    id: 'animated-navigation',
    name: 'Animated Navigation',
    profilePic: '/src/assets/projectData/projectprofilepic/animated-navigation-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/animated-navigation.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'An animated navigation showing css time delay skills.',
    link: 'https://xfreddy2007.github.io/Animated-Navigation/',
    github: 'https://github.com/xfreddy2007/Animated-Navigation',
  },
  {
    id: 'light-dark-mode',
    name: 'Light Dark Mode',
    profilePic: '/src/assets/projectData/projectprofilepic/light-dark-mode-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/light-dark-mode.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description:
      'Manually switch light mode or dark mode to change css styling in the page, and it would memorize the preference when visiting the website next time.',
    link: 'https://xfreddy2007.github.io/Light-Dark-Mode/',
    github: 'https://github.com/xfreddy2007/Light-Dark-Mode',
  },
  {
    id: 'picture-in-picture',
    name: 'Picture in Picture',
    profilePic: '/src/assets/projectData/projectprofilepic/picture-in-picture-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/picture-in-picture.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Using picture-in-picture API to generate a sub screen of video.',
    link: 'https://xfreddy2007.github.io/Picture-In-Picture/',
    github: 'https://github.com/xfreddy2007/Picture-In-Picture',
  },
  {
    id: 'infinite-scroll',
    name: 'Infinite Scroll',
    profilePic: '/src/assets/projectData/projectprofilepic/infinite-scroll-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/infinite-scroll.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Scrolling the page and it continuously pop up new images from Unsplash.',
    link: 'https://xfreddy2007.github.io/Infinite-Scroll/',
    github: 'https://github.com/xfreddy2007/Infinite-Scroll',
  },
  {
    id: 'quote-generator',
    name: 'Quote Generator',
    profilePic: '/src/assets/projectData/projectprofilepic/quote-generator-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/quote-generator.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'It randomly generate quotes, and you can tweet this quote as well.',
    link: 'https://xfreddy2007.github.io/Quote-generator/',
    github: 'https://github.com/xfreddy2007/Quote-generator',
  },
  {
    id: 'joke-teller',
    name: 'Joke Teller',
    profilePic: '/src/assets/projectData/projectprofilepic/joke-teller-rect.png',
    squareProfilePic: '/src/assets/projectData/projectprofilepic/joke-teller.png',
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Press the button and a piece of joke will come out from the VoiceRSS API.',
    link: 'https://xfreddy2007.github.io/Joke-Teller/',
    github: 'https://github.com/xfreddy2007/Joke-Teller',
  },
];

export default projectData;
