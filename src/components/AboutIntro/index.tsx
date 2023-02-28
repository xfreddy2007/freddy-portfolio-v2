import React from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@/src/store/hooks';
import style from './AboutIntro.module.scss';

const AboutIntro: React.FC = () => {
  // image production path
  const udemyCourseUrl = new URL('../../assets/udemy-courses.png', import.meta.url).href;
  const positivegridHomeUrl = new URL('../../assets/prositive-grid-home.png', import.meta.url).href;
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';
  return (
    <div className={style.root}>
      <div className={style.paragraphOne}>
        <h1 className="h4 text-center font-bold">
          Whatever we've encountered becomes the nutrient for us to evolve from what we were yesterday.
        </h1>
        <p className="p mt-2 text-justify">
          I was previously a civil engineer. When I was studying in University of Michigan, my first time of touching
          the world of web develeopment came to me, and I fount that it is the world I want to dive into.
        </p>
      </div>
      <div className="w-full bg-amber-900 text-white dark:bg-amber-700">
        <div className={style.paragraphTwo}>
          <img src={udemyCourseUrl} className={style.image} loading="lazy" />
          <p className="p mt-4 text-justify md:mt-0">
            After doing self-learning from Udemy courses, I grab the modern web developement skills such as HTML, CSS,
            Javascript, React, etc. Also, practice product branstorming and learn new technologies though making side
            projects. These processes helps me to create a solid background for front-end development, and make me find
            my first software engineer job.
          </p>
        </div>
      </div>
      <div className={style.paragraphThree}>
        <img src={positivegridHomeUrl} className={classNames('order-1 md:order-2', style.image)} loading="lazy" />
        <p className="p order-2 mt-4 text-justify md:order-1 md:mt-0">
          I am currently working at Positive Grid as a Front-End Developer. From this career I've learned about using
          Next.js and Typescript, increasing further usage of Tailwind CSS. But most of all, I 've dive into the
          E-commerce industry and understand the working environment of this field. Combining with my previous
          experience of project management, this workflow and industrial ecology brings me a lot in-depth knowledge, and
          I am really excited about it.
        </p>
      </div>
      <div className={style.paragraphFourth}>
        <h2 className="h4 text-center font-bold">
          Never stop myself of discovering new things. That's the best way to catch up to this fast-paced world.
        </h2>
        <p className="p my-2 text-center">Although not much experienced, but grow right off the bat rapidly.</p>
        <p className="p my-2 text-center">If you are interested, please keep in touch!</p>
        <a href="https://drive.google.com/file/d/1S6CCMalEPTOXUAvVDw1kXEC-iFCQsmLr/view?usp=sharing" target="_blank" rel="noreferrer">
          <div className={style.button} data-dark-mode={isDarkMode}>
            Resume
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutIntro;
