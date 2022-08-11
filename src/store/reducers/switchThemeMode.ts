import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '@/src/utils/updateObject';

type initialStateType = {
  mode: string;
};

type actionType = initialStateType & { type: string };

const initialState: initialStateType = {
  mode:
    localStorage.getItem('theme') ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
};

const switchThemeMode = (state: initialStateType, action: actionType) => {
  return updateObject(state, {
    mode: action.mode,
  });
};

const reducer = (state: initialStateType = initialState, action: actionType) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME_MODE:
      return switchThemeMode(state, action);
    default:
      return state;
  }
};

export default reducer;
