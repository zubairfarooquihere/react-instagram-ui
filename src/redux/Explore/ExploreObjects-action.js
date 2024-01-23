import { ExploreObjectsActions } from "./ExploreObjects";
import {
  generateRandomNumbers,
  generateRandomCommentsWithUser,
} from "../../Data/Name/Name";
import { v4 as uuid } from "uuid";

export const fetchExploreData = (gifArr) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const callData = gifArr.length;
      let arr = [];
      let obj = {};

      for (let j = 0; j < callData; j++) {
        obj = {
          id: "Explore" + uuid() + j,
          subObjArr: [],
        }
        const createSubObjs = 5;
        const commentsArr = generateRandomCommentsWithUser(5);
        const likesArr = generateRandomNumbers(5);

        for (let i = 0; i < createSubObjs; i++) {
          let id = "SubExplore" + uuid() + i;
          //console.log(i === createSubObjs-1 ? "Gif" : "Image");
          let subObj = {
            id: id,
            mainObjId: obj.id,
            type: i === createSubObjs-1 ? "Gif" : "Image",
            commentsArr: commentsArr[i],
            img: i === createSubObjs-1 ? gifArr[j]['media'][0]['mediumgif']['url'] : 750 + i + getRandomInteger(0, 30),
            likes: likesArr[i],
            selfLikes: false,
          };
          //console.log('SubExplore');
          obj.subObjArr.push(id);
          obj = {
            ...obj,
            [id]: {...subObj},
          };
        }
        // console.log("obj");
        //console.log(obj);
        arr.push(obj);
      }
      return arr;
    };
    try {
      const ExploreObjectsArr = await fetchData();
      dispatch(
        ExploreObjectsActions.addArray({ arr: ExploreObjectsArr || [] })
      );
    } catch (error) {
      console.log("error: " + error);
    }
  };
};
