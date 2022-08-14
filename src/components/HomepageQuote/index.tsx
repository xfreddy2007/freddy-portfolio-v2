import React from 'react';
import { ReactComponent as DownArrowIcon } from '@/src/assets/icon-down-arrow.svg';
import { useAppSelector } from '@/src/store/hooks';
import style from './HomepageQuote.module.scss';

const HomepageQuote: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';
  return (
    <div className={style.root}>
      <p className={style.textContainer}>
        <span className="whitespace-nowrap dark:text-white">I am Freddy. I</span>
        <div className={style.dynamicTextWrapper} data-dark-mode={isDarkMode}>
          <span className={style.dynamicText} data-dark-mode={isDarkMode}>
            create cool things.
          </span>
          <span className={style.dynamicText} data-dark-mode={isDarkMode}>
            solve problems.
          </span>
          <span className={style.dynamicText} data-dark-mode={isDarkMode}>
            am a team player.
          </span>
        </div>
      </p>
      <p className="font-source-code h5 mt-8 text-center dark:text-white">If you are interested, click below!</p>
      <div className={style.arrow} data-dark-mode={isDarkMode}>
        <DownArrowIcon />
        <DownArrowIcon />
        <DownArrowIcon />
      </div>
    </div>
  );
};

export default HomepageQuote;
