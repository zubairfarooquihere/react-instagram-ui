import { createSlice } from "@reduxjs/toolkit";

const PostObjects = createSlice({
  name: "PostObjects",
  initialState: { PostObjectsArr: [], PostObjects: {} },
  reducers: {
    addArray(state, action) {
      action.payload.arr.map((obj) => {
        let id = obj.id;
        state.PostObjectsArr.push(id);
        state.PostObjects[id] = {
          ...obj,
        };
        return null;
      });
    },
    postLike(state, action) {
      const { id, like } = action.payload;
      if (state.PostObjects[id].selfLikes === like) {
        return;
      }
      state.PostObjects[id].selfLikes = like;
      let count = state.PostObjects[id].likes;
      state.PostObjects[id].likes = like ? count + 1 : count - 1;
    },
    likeComment(state, action) {
      const { id, index, like } = action.payload;
      state.PostObjects[id].commentsArr[index].selfLike = like;
    },
    addComment(state, action) {
      const { Obj, commentObj } = action.payload;
      console.log(action.payload);
      const { id } = Obj;
      state.PostObjects[id].commentsArr.unshift(commentObj);
    },
  },
});

export const PostObjectsActions = PostObjects.actions;

export default PostObjects;
