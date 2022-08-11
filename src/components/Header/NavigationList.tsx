import React from 'react';
import classNames from 'classnames';
import style from './NavigationList.module.scss';

type NavigationListProps = {
  isOpen: boolean;
};

const NavigationList: React.FC<NavigationListProps> = ({ isOpen }) => {
  return (
    <div className={classNames('navigation-list__z-index bg-white dark:bg-black', isOpen && style.show, style.root)}>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text}>
          <a href="/about">About</a>
        </span>
      </div>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text}>
          <a href="/projects">Projects</a>
        </span>
      </div>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text}>
          <a href="/blog">Blog</a>
        </span>
      </div>
      <div className={classNames('navigation-list__z-index font-raleway h1 dark:text-white', style.tab)}>
        <span className={style.text}>
          <a href="/contact">Contact</a>
        </span>
      </div>
      {/* background Animaiton */}
      <div className={classNames('bg-pink-900 dark:bg-pink-700', style.colorBackground)} />
      <div className={style.imgBackground}></div>
    </div>
  );
};

export default NavigationList;