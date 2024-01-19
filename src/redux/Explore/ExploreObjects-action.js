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
      }
      const callData = gifArr.length;
      let arr = [];
      for (let i = 0; i < callData; i++) {
        const commentsArr = generateRandomCommentsWithUser(5);
        const likesArr = generateRandomNumbers(5);

        let obj = {
          id: "Explore" + uuid() + i,
          commentsArr: commentsArr,
          likes: likesArr,
          img: [250 + i + getRandomInteger(0, 30), 250 + i + getRandomInteger(0, 30), 250 + i + getRandomInteger(0, 30), 250 + i + getRandomInteger(0, 30)],
          gifUrl: gifArr[i]["media"][0]["mediumgif"]["url"]
        };
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
