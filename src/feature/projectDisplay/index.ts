// Duck pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectDisplayState {
  categoryList: Array<'featureProjects' | 'frontEnd' | 'backEnd' | 'fullStack'>;
  searchText: string;
  selectedProjectId: string;
}

const initialState: ProjectDisplayState = {
  categoryList: [],
  searchText: '',
  selectedProjectId: '',
};

const projectDisplaySlice = createSlice({
  name: 'projectDisplay',
  initialState,
  reducers: {
    switchCategorySelection(state, action: PayloadAction<'featureProjects' | 'frontEnd' | 'backEnd' | 'fullStack'>) {
      const idx = state.categoryList.findIndex((item) => item === action.payload);
      if (idx === -1) {
        state.categoryList.push(action.payload);
      } else {
        state.categoryList = state.categoryList.filter((item) => item !== action.payload);
      }
    },
    searchProject(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    onClickSelectProject(state, action: PayloadAction<string>) {
      state.selectedProjectId = action.payload;
    },
  },
});

export const { switchCategorySelection, searchProject, onClickSelectProject } = projectDisplaySlice.actions;
export default projectDisplaySlice.reducer;
