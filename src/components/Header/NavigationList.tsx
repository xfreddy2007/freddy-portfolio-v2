import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import style from './NavigationList.module.scss';

type NavigationListProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavigationList: React.FC<NavigationListProps> = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className={classNames('navigation-list__z-index bg-white dark:bg-black', isOpen && style.show, style.root)}>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text} onClick={() => setIsOpen(false)}>
          <Link to="/about">About</Link>
        </span>
      </div>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text} onClick={() => setIsOpen(false)}>
          <Link to="/projects">Projects</Link>
        </span>
      </div>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text} onClick={() => setIsOpen(false)}>
          <Link to="/blog">Blog</Link>
        </span>
      </div>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text} onClick={() => setIsOpen(false)}>
          <Link to="/contact">Contact</Link>
        </span>
      </div>
      {/* background Animaiton */}
      <div className={classNames('bg-amber-900 dark:bg-amber-700', style.colorBackground)} />
      <div className={style.imgBackground}></div>
    </div>
  );
};

export default NavigationList;
