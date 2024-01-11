import { configureStore } from "@reduxjs/toolkit";
import weninfo from "./webinfo";
import PostObjects from "./PostObjects";

const store = configureStore({
  reducer: { weninfo: weninfo.reducer, PostObjects: PostObjects.reducer },
});

export default store;
