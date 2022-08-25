// Duck pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryOptionType } from '@/src/assets/projectData/projectData';

interface ProjectDisplayState {
  categoryList: Array<CategoryOptionType>;
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
    switchCategorySelection(state, action: PayloadAction<CategoryOptionType>) {
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
