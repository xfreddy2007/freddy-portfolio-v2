import React from 'react';
import classNames from 'classnames';
import style from './DarkModeSwitch.module.scss';

import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { switchThemeMode } from '@/src/feature/switchThemeMode';

const DarkModeSwitch: React.FC = () => {
  // redux tookit: dark mode
  const mode = useAppSelector((state) => state.switchThemeMode.mode);
  const dispatch = useAppDispatch();
  const isDarkMode = mode === 'dark';

  return (
    <div className={style.root} onClick={() => dispatch(switchThemeMode())}>
      <input
        className={style.checkbox}
        checked={isDarkMode}
        type="checkbox"
        data-mode={isDarkMode}
        onChange={() => {
          return;
        }}
      />
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
