import { createSlice } from "@reduxjs/toolkit";
const homeScreenSlice = createSlice({
  name: "homeScreenSlice",
  initialState: {
    isSettingOpen: false,
    isShopeOpen: false,
    isinventryOpen: false,
    isHelpOpen: false,
  },
  reducers: {
    openSetting(state) {
      state.isSettingOpen = !state.isSettingOpen;
    },
    openShope(state) {
      state.isShopeOpen = !state.isShopeOpen;
    },
    openInventry(state) {
      state.isinventryOpen = !state.isinventryOpen;
    },
    openhelp(state) {
      state.isHelpOpen = !state.isHelpOpen;
    },
  },
});
export default homeScreenSlice.reducer;
export const homeScreenAction=homeScreenSlice.actions;