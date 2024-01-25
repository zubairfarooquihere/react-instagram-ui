import { configureStore } from "@reduxjs/toolkit";
import weninfo from "./webinfo";
import PostObjects from "./PostObjects";
import ExploreObjects from "./Explore/ExploreObjects";
import ReelsObjects from "./Reels/ReelsObjects";

const store = configureStore({
  reducer: {
    weninfo: weninfo.reducer,
    PostObjects: PostObjects.reducer,
    ExploreObjects: ExploreObjects.reducer,
    ReelsObjects: ReelsObjects.reducer,
  },
});

export default store;
