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
    postLike(state, action) {
      const { id, like } = action.payload;
      if (state.ReelsObjects[id].selfLikes === like) {
        return;
      }
      state.ReelsObjects[id].selfLikes = like;
      let count = state.ReelsObjects[id].likes;
      state.ReelsObjects[id].likes = like ? count + 1 : count - 1;
    },
    likeComment(state, action) {
      const { id, index, like } = action.payload;
      state.ReelsObjects[id].commentsArr[index].selfLike = like;
      let count = state.ReelsObjects[id].commentsArr[index].likes;
      count = like ? count + 1 : count - 1;
      state.ReelsObjects[id].commentsArr[index].likes = count;
    },
    addComment(state, action) {
      const { id, commentObj } = action.payload;
      state.ReelsObjects[id].commentsArr.unshift(commentObj);
    }
  },
});

export const ReelsObjectsActions = ReelsObjects.actions;

export default ReelsObjects;
