import { configureStore } from "@reduxjs/toolkit";
import weninfo from "./webinfo";

const store = configureStore({
  reducer: { weninfo: weninfo.reducer },
});

export default store;