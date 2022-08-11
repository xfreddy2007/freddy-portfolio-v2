import React, { useEffect } from 'react';
import classNames from 'classnames';
import useDarkMode from '../../utils/hooks/useDarkMode';
import { ReactComponent as Avatar } from '../../assets/avatar-cute-freddy.svg';
import style from './HomepageIntro.module.scss';

const HomepageIntro: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => console.log(isDarkMode, 'HomepageIntro.js'), [isDarkMode]);
  return (
    <div className="flex w-full justify-center gap-x-4 pt-16 lg:pt-20">
      <div className={style.avatar} data-mode={isDarkMode}>
        <Avatar />
      </div>
      <div className={classNames('dark:text-white', style.intro)}>
        Hey! Take a look at this playground! <br />
        You may find amazing thing!
      </div>
    </div>
  );
};

export default HomepageIntro;
