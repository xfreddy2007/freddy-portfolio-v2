import React from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@/src/store/hooks';
import { ReactComponent as Avatar } from '../../assets/avatar-cute-freddy.svg';
import style from './HomepageIntro.module.scss';

const HomepageIntro: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

  return (
    <div className={style.root}>
      <div className={style.avatar} data-dark-mode={isDarkMode}>
        <Avatar />
      </div>
      <div className={classNames('dark:text-white', style.intro)}>
        Hey! Take a look at this playground! <br />
        You may find amazing things!
      </div>
    </div>
  );
};

export default HomepageIntro;
