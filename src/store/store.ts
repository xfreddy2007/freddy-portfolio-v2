import { configureStore } from '@reduxjs/toolkit';
import switchThemeModeReducer from '../feature/switchThemeMode';
import projectDisplayReducer from '../feature/projectDisplay';
import blogDisplayReducer from '../feature/blogDisplay';

export const store = configureStore({
  reducer: {
    switchThemeMode: switchThemeModeReducer,
    projectDisplay: projectDisplayReducer,
    blogDisplay: blogDisplayReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
