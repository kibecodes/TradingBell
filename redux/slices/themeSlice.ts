import { createSlice } from '@reduxjs/toolkit';

//**define the reducer, actions, and selectors for managing the theme in one place. */
const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'dark' },
  reducers: {
    changeTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const selectTheme = ({ state }: any) => state.theme;
export const selectThemeMode = ({ state }: any) => state.theme.mode;

export default themeSlice.reducer;
