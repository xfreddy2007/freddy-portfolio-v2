import * as actionTypes from './actionTypes';

type ThemeMode = 'light' | 'dark';

export const switchThemeMode = (mode: ThemeMode) => {
  return {
    type: actionTypes.SWITCH_THEME_MODE,
    mode,
  };
};
