// Duck pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addDarkModeClass } from '@/src/utils/switchDarkModeClass';

export type ThemeMode = 'light' | 'dark';
interface SwitchModeState {
  mode: 'light' | 'dark';
}

const initialState: SwitchModeState = {
  mode:
    (localStorage.getItem('theme') as ThemeMode) ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
};

const switchThemeModeSlice = createSlice({
  name: 'switchThemeMode',
  initialState,
  reducers: {
    switchThemeMode(state) {
      if (state.mode === 'dark') {
        state.mode = 'light';
        addDarkModeClass('light');
      } else {
        state.mode = 'dark';
        addDarkModeClass('dark');
      }
    },
  },
});

export const { switchThemeMode } = switchThemeModeSlice.actions;
export default switchThemeModeSlice.reducer;
