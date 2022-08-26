import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import DarkModeSwitch from '../DarkModeSwitch';
import NavigationList from './NavigationList';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { useAppSelector } from '@/src/store/hooks';

const Header: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const isDarkMode = mode === 'dark';

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
        <Link to="/" className="absolute left-1/2 -translate-x-1/2" target="_self">
          <div className={classNames('dark:text-white', style.title)}>
            <span className={style.animateText} data-dark-mode={isDarkMode}>
              Freddy's Playground
            </span>
          </div>
        </Link>
        <DarkModeSwitch />
      </div>
      <NavigationList isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
