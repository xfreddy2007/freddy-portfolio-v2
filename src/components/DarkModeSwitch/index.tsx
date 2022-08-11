import React from 'react';
import classNames from 'classnames';
import useDarkMode from '../../utils/hooks/useDarkMode';
import style from './DarkModeSwitch.module.scss';

const DarkModeSwitch: React.FC = () => {
  // get dark mode
  const { isDarkMode, switchMode } = useDarkMode();

  return (
    <div className={style.root} onClick={switchMode}>
      <input className={style.checkbox} checked={isDarkMode} type="checkbox" data-mode={isDarkMode} />
      <label className={classNames(style.label, 'dark:bg-purple-800')}>
        <span className={classNames(style.switch, 'dark:bg-black')}>
          {isDarkMode ? (
            <img src="/src/assets/icon-moon.png" loading="lazy" />
          ) : (
            <img src="/src/assets/icon-sun.png" loading="lazy" />
          )}
        </span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
