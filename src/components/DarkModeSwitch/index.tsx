import React from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { switchThemeMode } from '@/src/feature/switchThemeMode';
import style from './DarkModeSwitch.module.scss';

const DarkModeSwitch: React.FC = () => {
  // image production path
  const moonIconUrl = new URL('../../assets/icon-moon.png', import.meta.url).href;
  const sunIconUrl = new URL('../../assets/icon-sun.png', import.meta.url).href;
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
          {isDarkMode ? <img src={moonIconUrl} loading="lazy" /> : <img src={sunIconUrl} loading="lazy" />}
        </span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
