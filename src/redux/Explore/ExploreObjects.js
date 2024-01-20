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
    postLike(state, action) {
      const { ExploreObj, like } = action.payload;
      const { mainObjId, id } = ExploreObj;
      if(state.ExploreObjects[mainObjId][id].selfLikes === like) {
        return;
      }
      state.ExploreObjects[mainObjId][id].selfLikes = like
      let count = state.ExploreObjects[mainObjId][id].likes;
      state.ExploreObjects[mainObjId][id].likes = like ? count + 1 : count - 1;
    },
    likeComment(state, action) {
      const {ExploreObj, index, like} = action.payload
      const { mainObjId, id } = ExploreObj;
      state.ExploreObjects[mainObjId][id].commentsArr[index].selfLike = like
    },
    addComment(state, action) {
      const {Obj, commentObj} = action.payload
      const { mainObjId, id } = Obj;
      state.ExploreObjects[mainObjId][id].commentsArr.unshift(commentObj);
    }
  },
});

export const ExploreObjectsActions = ExploreObjects.actions;

export default ExploreObjects;
