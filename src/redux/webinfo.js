import { createSlice } from "@reduxjs/toolkit";

const weninfo = createSlice({
  name: "weninfo",
  initialState: { screenSize: window.innerWidth, minOuterNav: 1200, minBottomNav: 800 },
  reducers: {
    resize(state, action) {
        state.screenSize = action.payload;
    },
  },
});

export const webinfoActions = weninfo.actions;

export default weninfo;
