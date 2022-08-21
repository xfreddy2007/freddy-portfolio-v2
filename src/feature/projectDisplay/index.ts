// Duck pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectDisplayState {
  categoryList: string[];
}

const initialState: ProjectDisplayState = {
  categoryList: [],
};

const projectDisplaySlice = createSlice({
  name: 'projectDisplay',
  initialState,
  reducers: {
    switchCategorySelection(state, action: PayloadAction<string>) {
      const idx = state.categoryList.findIndex((item) => item === action.payload);
      if (idx === -1) {
        state.categoryList.push(action.payload);
      } else {
        state.categoryList = state.categoryList.filter((item) => item !== action.payload);
      }
    },
  },
});

export const { switchCategorySelection } = projectDisplaySlice.actions;
export default projectDisplaySlice.reducer;
