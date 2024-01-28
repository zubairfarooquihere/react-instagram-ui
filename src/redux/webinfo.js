import { createSlice } from "@reduxjs/toolkit";

const weninfo = createSlice({
  name: "weninfo",
  initialState: { short: false, screenSize: window.innerWidth, minOuterNav: 1200, minBottomNav: 800, darkMode: false },
  reducers: {
    resize(state, action) {
        state.screenSize = action.payload;
    },
    darkModeOn(state, action) {
      state.darkMode = action.payload;
    },
    isShort(state, action) {
      state.short = action.payload;
      if(action.payload === true) {
        state.screenSize = state.minBottomNav + 10; 
      } else {
        state.screenSize = state.minOuterNav + 1;
      }
    }
  },
});

export const webinfoActions = weninfo.actions;

export default weninfo;
