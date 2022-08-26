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

// image production path
const civiltoolsPath = new URL('./projectprofilepic/civil-tools.png', import.meta.url).href;
const civiltoolsRectPath = new URL('./projectprofilepic/civil-tools-rect.png', import.meta.url).href;
const burgerBuilderPath = new URL('./projectprofilepic/burger-builder.png', import.meta.url).href;
const burgerBuilderRectPath = new URL('./projectprofilepic/burger-builder-rect.png', import.meta.url).href;
const roadRacePath = new URL('./projectprofilepic/road-race.png', import.meta.url).href;
const roadRaceRectPath = new URL('./projectprofilepic/road-race-rect.png', import.meta.url).href;
const smartBrainPath = new URL('./projectprofilepic/smart-brain.png', import.meta.url).href;
const smartBrainRectPath = new URL('./projectprofilepic/smart-brain-rect.png', import.meta.url).href;
const roboFriendsPath = new URL('./projectprofilepic/robo-friends.png', import.meta.url).href;
const roboFriendsRectPath = new URL('./projectprofilepic/robo-friends-rect.png', import.meta.url).href;
const pongGamePath = new URL('./projectprofilepic/pong-game.png', import.meta.url).href;
const pongGameRectPath = new URL('./projectprofilepic/pong-game-rect.png', import.meta.url).href;
const paintClonePath = new URL('./projectprofilepic/paint-clone.png', import.meta.url).href;
const paintCloneRectPath = new URL('./projectprofilepic/paint-clone-rect.png', import.meta.url).href;
const calculatorPath = new URL('./projectprofilepic/calculator.png', import.meta.url).href;
const calculatorRectPath = new URL('./projectprofilepic/calculator-rect.png', import.meta.url).href;
const dragNDropBoardPath = new URL('./projectprofilepic/drag-n-drop-board.png', import.meta.url).href;
const dragNDropBoardRectPath = new URL('./projectprofilepic/drag-n-drop-board-rect.png', import.meta.url).href;
const mathSprintGamePath = new URL('./projectprofilepic/math-sprint-game.png', import.meta.url).href;
const mathSprintGameRectPath = new URL('./projectprofilepic/math-sprint-game-rect.png', import.meta.url).href;
const nasaAstronomyPictureOfTheDayPath = new URL(
  './projectprofilepic/nasa-astronomy-picture-of-the-day.png',
  import.meta.url,
).href;
const nasaAstronomyPictureOfTheDayRectPath = new URL(
  './projectprofilepic/nasa-astronomy-picture-of-the-day-rect.png',
  import.meta.url,
).href;
const spockRockGamePath = new URL('./projectprofilepic/spock-rock-game.png', import.meta.url).href;
const spockRockGameRectPath = new URL('./projectprofilepic/spock-rock-game-rect.png', import.meta.url).href;
const formValidatorPath = new URL('./projectprofilepic/form-validator.png', import.meta.url).href;
const formValidatorRectPath = new URL('./projectprofilepic/form-validator-rect.png', import.meta.url).href;
const videoPlayerPath = new URL('./projectprofilepic/video-player.png', import.meta.url).href;
const videoPlayerRectPath = new URL('./projectprofilepic/video-player-rect.png', import.meta.url).href;
const bookmarksPath = new URL('./projectprofilepic/bookmarks.png', import.meta.url).href;
const bookmarksRectPath = new URL('./projectprofilepic/bookmarks-rect.png', import.meta.url).href;
const customCountdownPath = new URL('./projectprofilepic/custom-countdown.png', import.meta.url).href;
const customCountdownRectPath = new URL('./projectprofilepic/custom-countdown-rect.png', import.meta.url).href;
const musicPlayerPath = new URL('./projectprofilepic/music-player.png', import.meta.url).href;
const musicPlayerRectPath = new URL('./projectprofilepic/music-player-rect.png', import.meta.url).href;
const animatedNavigationPath = new URL('./projectprofilepic/animated-navigation.png', import.meta.url).href;
const animatedNavigationRectPath = new URL('./projectprofilepic/animated-navigation-rect.png', import.meta.url).href;
const lightDarkModePath = new URL('./projectprofilepic/light-dark-mode.png', import.meta.url).href;
const lightDarkModeRectPath = new URL('./projectprofilepic/light-dark-mode-rect.png', import.meta.url).href;
const pictureInPicturePath = new URL('./projectprofilepic/picture-in-picture.png', import.meta.url).href;
const pictureInPictureRectPath = new URL('./projectprofilepic/picture-in-picture-rect.png', import.meta.url).href;
const infiniteScrollPath = new URL('./projectprofilepic/infinite-scroll.png', import.meta.url).href;
const infiniteScrollRectPath = new URL('./projectprofilepic/infinite-scroll-rect.png', import.meta.url).href;
const quoteGeneratorPath = new URL('./projectprofilepic/quote-generator.png', import.meta.url).href;
const quoteGeneratorRectPath = new URL('./projectprofilepic/quote-generator-rect.png', import.meta.url).href;
const jokeTellerPath = new URL('./projectprofilepic/joke-teller.png', import.meta.url).href;
const jokeTellerRectPath = new URL('./projectprofilepic/joke-teller-rect.png', import.meta.url).href;

const projectData: ProjectDataTypes[] = [
  {
    id: 'civil-tools',
    name: 'Civil & Structural tools',
    profilePic: civiltoolsRectPath,
    squareProfilePic: civiltoolsPath,
    category: ['featureProjects', 'frontEnd'],
    genre: ['typescript', 'next.js', 'tailwind', 'reacthooks', 'css-in-js'],
    description: 'A place where has a bunch of helper calculation tools for civil and structural engineers.',
    link: 'https://civil-structural-tools.herokuapp.com/',
    github: 'https://github.com/xfreddy2007/civil-structural-tools',
  },
  {
    id: 'burger-builder',
    name: 'Burger builder',
    profilePic: burgerBuilderRectPath,
    squareProfilePic: burgerBuilderPath,
    category: ['featureProjects', 'frontEnd'],
    genre: ['javascript', 'redux', 'reacthooks', 'firebase'],
    description: 'A burger builder which you can order your customized burgers and sent orders to the backend.',
    link: 'https://burger-builder-a6e21.web.app/',
    github: 'https://github.com/xfreddy2007/burger-builder',
  },
  {
    id: 'road-race',
    name: 'Road Race game',
    profilePic: roadRaceRectPath,
    squareProfilePic: roadRacePath,
    category: ['featureProjects', 'backEnd'],
    genre: ['rust'],
    description: 'A road dodging simple game made of Rust programming laguage and Rusty game engine.',
    github: 'https://github.com/xfreddy2007/Road-race',
  },
  {
    id: 'smart-brain',
    name: 'Smart Brain Detector',
    profilePic: smartBrainRectPath,
    squareProfilePic: smartBrainPath,
    category: ['featureProjects', 'fullStack'],
    genre: ['javascript', 'react', 'node.js', 'postgresql'],
    description: 'An App which you can detect your face within an image.',
    link: 'https://smart-brain-freddy.herokuapp.com',
    github: 'https://github.com/xfreddy2007/Smart-brain',
  },
  {
    id: 'robo-friends',
    name: 'Robo Friends',
    profilePic: roboFriendsRectPath,
    squareProfilePic: roboFriendsPath,
    category: ['frontEnd'],
    genre: ['javascript', 'react'],
    description: 'An App which you can search your favorite robot friend.',
    link: 'https://xfreddy2007.github.io/robofriends-project/',
    github: 'https://github.com/xfreddy2007/robofriends-project',
  },
  {
    id: 'pong-game',
    name: 'Pong Game',
    profilePic: pongGameRectPath,
    squareProfilePic: pongGamePath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A web base ping-pong game.',
    link: 'https://xfreddy2007.github.io/Pong-Game/',
    github: 'https://github.com/xfreddy2007/Pong-Game',
  },
  {
    id: 'paint-clone',
    name: 'Paint Clone',
    profilePic: paintCloneRectPath,
    squareProfilePic: paintClonePath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A web base customized paint board.',
    link: 'https://xfreddy2007.github.io/Paint-Clone/',
    github: 'https://github.com/xfreddy2007/Paint-Clone',
  },
  {
    id: 'calculator',
    name: 'Calculator',
    profilePic: calculatorRectPath,
    squareProfilePic: calculatorPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A calculator built from scratch.',
    link: 'https://xfreddy2007.github.io/Calculator/',
    github: 'https://github.com/xfreddy2007/Calculator',
  },
  {
    id: 'drag-n-drop-board',
    name: "Drag 'n' Drop Board",
    profilePic: dragNDropBoardRectPath,
    squareProfilePic: dragNDropBoardPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Create a board that can drag items within any column, and also modify text with that item.',
    link: 'https://xfreddy2007.github.io/Drag-n-Drop-Board/',
    github: 'https://github.com/xfreddy2007/Drag-n-Drop-Board',
  },
  {
    id: 'math-sprint-game',
    name: 'Math Sprint Game',
    profilePic: mathSprintGameRectPath,
    squareProfilePic: mathSprintGamePath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Create a Math game and it will store best scores in localstorage.',
    link: 'https://xfreddy2007.github.io/Math-Sprint-Game/',
    github: 'https://github.com/xfreddy2007/Math-Sprint-Game',
  },
  {
    id: 'nasa-astronomy-picture-of-the-day',
    name: 'NASA Astronomy Picture of the Day',
    profilePic: nasaAstronomyPictureOfTheDayRectPath,
    squareProfilePic: nasaAstronomyPictureOfTheDayPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'It takes the NASA API to present the APOD API and can store favorites images in localstorage.',
    link: 'https://xfreddy2007.github.io/NASA-Astronomy-Picture-of-the-Day/',
    github: 'https://github.com/xfreddy2007/NASA-Astronomy-Picture-of-the-Day',
  },
  {
    id: 'spock-rock-game',
    name: 'Spock Rock Game',
    profilePic: spockRockGameRectPath,
    squareProfilePic: spockRockGamePath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Using browser to play Rock-Paper-Scissors-Lizard-Spock.',
    link: 'https://xfreddy2007.github.io/Spock-Rock-Game/',
    github: 'https://github.com/xfreddy2007/Spock-Rock-Game',
  },
  {
    id: 'form-validator',
    name: 'Form Validator',
    profilePic: formValidatorRectPath,
    squareProfilePic: formValidatorPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A page for user form and can be further implemented with back-end projects.',
    link: 'https://xfreddy2007.github.io/Form-Validator/',
    github: 'https://github.com/xfreddy2007/Form-Validator',
  },
  {
    id: 'video-player',
    name: 'Video Player',
    profilePic: videoPlayerRectPath,
    squareProfilePic: videoPlayerPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A Self-build UI for video player.',
    link: 'https://xfreddy2007.github.io/Video-Player/',
    github: 'https://github.com/xfreddy2007/Video-Player',
  },
  {
    id: 'bookmarks',
    name: 'Bookmarks',
    profilePic: bookmarksRectPath,
    squareProfilePic: bookmarksPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A bookmark website to store preference website links.',
    link: 'https://xfreddy2007.github.io/Bookmarks/',
    github: 'https://github.com/xfreddy2007/Bookmarks',
  },
  {
    id: 'custom-countdown',
    name: 'Custom Countdown',
    profilePic: customCountdownRectPath,
    squareProfilePic: customCountdownPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Do a countdown clock and it will store the countdown information in localstorage as well.',
    link: 'https://xfreddy2007.github.io/Custom-Countdown/',
    github: 'https://github.com/xfreddy2007/Custom-Countdown',
  },
  {
    id: 'music-player',
    name: 'Music Player',
    profilePic: musicPlayerRectPath,
    squareProfilePic: musicPlayerPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'A Music Player making from scratch.',
    link: 'https://xfreddy2007.github.io/Music-Player/',
    github: 'https://github.com/xfreddy2007/Music-Player',
  },
  {
    id: 'animated-navigation',
    name: 'Animated Navigation',
    profilePic: animatedNavigationRectPath,
    squareProfilePic: animatedNavigationPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'An animated navigation showing css time delay skills.',
    link: 'https://xfreddy2007.github.io/Animated-Navigation/',
    github: 'https://github.com/xfreddy2007/Animated-Navigation',
  },
  {
    id: 'light-dark-mode',
    name: 'Light Dark Mode',
    profilePic: lightDarkModeRectPath,
    squareProfilePic: lightDarkModePath,
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
    profilePic: pictureInPictureRectPath,
    squareProfilePic: pictureInPicturePath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Using picture-in-picture API to generate a sub screen of video.',
    link: 'https://xfreddy2007.github.io/Picture-In-Picture/',
    github: 'https://github.com/xfreddy2007/Picture-In-Picture',
  },
  {
    id: 'infinite-scroll',
    name: 'Infinite Scroll',
    profilePic: infiniteScrollRectPath,
    squareProfilePic: infiniteScrollPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Scrolling the page and it continuously pop up new images from Unsplash.',
    link: 'https://xfreddy2007.github.io/Infinite-Scroll/',
    github: 'https://github.com/xfreddy2007/Infinite-Scroll',
  },
  {
    id: 'quote-generator',
    name: 'Quote Generator',
    profilePic: quoteGeneratorRectPath,
    squareProfilePic: quoteGeneratorPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'It randomly generate quotes, and you can tweet this quote as well.',
    link: 'https://xfreddy2007.github.io/Quote-generator/',
    github: 'https://github.com/xfreddy2007/Quote-generator',
  },
  {
    id: 'joke-teller',
    name: 'Joke Teller',
    profilePic: jokeTellerRectPath,
    squareProfilePic: jokeTellerPath,
    category: ['frontEnd'],
    genre: ['html', 'css', 'javascript'],
    description: 'Press the button and a piece of joke will come out from the VoiceRSS API.',
    link: 'https://xfreddy2007.github.io/Joke-Teller/',
    github: 'https://github.com/xfreddy2007/Joke-Teller',
  },
];

export default projectData;
