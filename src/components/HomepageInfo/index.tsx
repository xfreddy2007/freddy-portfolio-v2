import React from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@/src/store/hooks';
import style from './HomepageInfo.module.scss';

const HomepageInfo: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';
  return (
    <div className={classNames('bg-amber-900 dark:bg-amber-700', style.root)}>
      <p className="font-raleway p flex flex-col text-white md:h5">
        <span>Fully passionate in Web Development.</span>
        <span>Problem solving, critical thinking,</span>
        <span>providing intuitive, responsive and creative designs for users.</span>
      </p>
      <a href="https://drive.google.com/file/d/1S6CCMalEPTOXUAvVDw1kXEC-iFCQsmLr/view?usp=sharing" target="_blank" rel="noreferrer">
        <div className={style.button} data-dark-mode={isDarkMode}>
          Resume
        </div>
      </a>
    </div>
  );
};

export default HomepageInfo;
