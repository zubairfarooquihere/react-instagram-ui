import { createSlice } from "@reduxjs/toolkit";

const weninfo = createSlice({
  name: "weninfo",
  initialState: { screenSize: window.innerWidth, minOuterNav: 1200, minBottomNav: 800, darkMode: false },
  reducers: {
    resize(state, action) {
        state.screenSize = action.payload;
    },
    darkModeOn(state, action) {
      state.darkMode = action.payload;
    }
  },
});

export const webinfoActions = weninfo.actions;

export default weninfo;
