import { configureStore } from '@reduxjs/toolkit';
import switchThemeModeReducer from '../feature/switchThemeMode';

export const store = configureStore({
  reducer: {
    switchThemeMode: switchThemeModeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
