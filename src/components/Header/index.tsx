import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import useDarkMode from '@/src/utils/hooks/useDarkMode';
import DarkModeSwitch from '../DarkModeSwitch';
import style from './Header.module.scss';

const Header: React.FC = () => {
  // get dark mode
  const { isDarkMode } = useDarkMode();

  const [isOpen, setIsOpen] = useState(false);
  const toggleHambugerIcon = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={classNames('header__z-index', style.root)}>
      <div className="flex cursor-pointer flex-col justify-center" onClick={toggleHambugerIcon}>
        <div className={classNames(style.hambugerOne, 'dark:bg-white', isOpen && style.open)} />
        <div className={classNames(style.hambugerTwo, 'dark:bg-white', isOpen && style.open)} />
        <div className={classNames(style.hambugerThree, 'dark:bg-white', isOpen && style.open)} />
      </div>
      <span className="font-raleway dark-transition font-bold transition-all duration-200 dark:text-white">
        <a href="/" className="w-full">
          Freddy Liu
        </a>
      </span>
      <DarkModeSwitch />
    </div>
  );
};

export default Header;
