import { createSlice } from "@reduxjs/toolkit";

const ReelsObjects = createSlice({
  name: "ReelsObjects",
  initialState: { ReelsObjectsArr: [], ReelsObjects: {} },
  reducers: {
    addArray(state, action) {
      action.payload.arr.map((obj) => {
        let id = obj.id;
        state.ReelsObjectsArr.push(id);
        state.ReelsObjects[id] = {
          ...obj,
        };
        return null;
      });
    },
  },
});

export const ReelsObjectsActions = ReelsObjects.actions;

export default ReelsObjects;
