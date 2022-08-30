// Duck pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogDisplayState {
  activeBlogId: string;
}
const initialState: BlogDisplayState = {
  activeBlogId: '',
};

const blogDisplaySlice = createSlice({
  name: 'blogDisplay',
  initialState,
  reducers: {
    setActiveBlog(state, action: PayloadAction<string>) {
      state.activeBlogId = action.payload;
    },
  },
});

export const { setActiveBlog } = blogDisplaySlice.actions;
export default blogDisplaySlice.reducer;
