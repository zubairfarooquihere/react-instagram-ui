import { createSlice } from "@reduxjs/toolkit";

const ExploreObjects = createSlice({
  name: "ExploreObjects",
  initialState: { ExploreObjectsArr: [], ExploreObjects: {} },
  reducers: {
    addArray(state, action) {
      action.payload.arr.map((obj) => {
        let id = obj.id;
        state.ExploreObjectsArr.push(id);
        state.ExploreObjects[id] = {
          ...obj,
        };
        return null;
      });
    },
  },
});

export const ExploreObjectsActions = ExploreObjects.actions;

export default ExploreObjects;
