import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import useDarkMode from '@/src/utils/hooks/useDarkMode';
import DarkModeSwitch from '../DarkModeSwitch';
import NavigationList from './NavigationList';
import style from './Header.module.scss';

const Header: React.FC = () => {
  // get dark mode
  const { isDarkMode } = useDarkMode();

  const [isOpen, setIsOpen] = useState(false);
  const toggleHambugerIcon = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <div className={classNames('header__z-index dark:bg-black', style.root)}>
        <div className="flex cursor-pointer flex-col justify-center" onClick={toggleHambugerIcon}>
          <div className={classNames(style.hambugerOne, 'dark:bg-white', isOpen && style.open)} />
          <div className={classNames(style.hambugerTwo, 'dark:bg-white', isOpen && style.open)} />
          <div className={classNames(style.hambugerThree, 'dark:bg-white', isOpen && style.open)} />
        </div>
        {/* typing animation */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2" target="_self">
          <div className={classNames('dark:text-white', style.title)}>
            <span className={style.animateText} data-dark-mode={isDarkMode}>
              Freddy's Playground
            </span>
          </div>
        </a>
        <DarkModeSwitch />
      </div>
      <NavigationList isOpen={isOpen} />
    </>
  );
};

export default Header;
