import { ReelsObjectsActions } from "./ReelsObjects";
import {
  generateRandomNumbers,
  generateRandomCommentsWithUser,
  generateRandomMotivationalQuotes,
  generateRandomNames
} from "../../Data/Name/Name";
import { v4 as uuid } from "uuid";

export const fetchReelsData = (gifArr) => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log('fetchReelsData');
      const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const callData = gifArr.length;
      let arr = [];

      for (let i = 0; i < callData; i++) {
        const commentsArr = generateRandomCommentsWithUser(callData);
        const likesArr = generateRandomNumbers(callData);
        const captionArr = generateRandomMotivationalQuotes(callData)
        const nameArr = generateRandomNames(callData);

        let id = "Reel" + uuid() + i;
        let obj = {
          id: id,
          profileImg: `https://picsum.photos/250/${250 + getRandomInteger(0, 30)}`,
          caption: captionArr[i],
          commentsArr: commentsArr[i],
          gif: gifArr[i]['media'][0]['mediumgif']['url'],
          likes: likesArr[i],
          name: nameArr[i],
          selfLikes: false,
        };
        arr.push(obj);
      }
      return arr;
    };
    try {
      const ReelsObjectsArr = await fetchData();
      //console.log(ReelsObjectsArr);
      dispatch(
        ReelsObjectsActions.addArray({ arr: ReelsObjectsArr || [] })
      );
    } catch (error) {
      console.log("error: " + error);
    }
  };
};
