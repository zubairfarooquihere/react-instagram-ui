import { PostObjectsActions } from "./PostObjects";
import {
  generateRandomNames,
  generateRandomPlaces,
  generateRandomMotivationalQuotes,
  generateRandomNumbers,
  formatTime,
  generateRandomCommentsWithUser,
} from "../Data/Name/Name";
import { v4 as uuid } from "uuid";
const callData = 10;

export const fetchPostsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const namesArr = generateRandomNames(callData);
      const placesArr = generateRandomPlaces(callData);
      const captionsArr = generateRandomMotivationalQuotes(callData);
      const commentsArr = generateRandomCommentsWithUser(callData);
      const likesArr = generateRandomNumbers(callData);

      let arr = [];
      for (let i = 0; i < callData; i++) {
        let obj = {
          id: "Post" + uuid() + i,
          name: namesArr[i],
          place: placesArr[i],
          caption: captionsArr[i],
          commentsArr: commentsArr[i],
          likes: likesArr[i],
          selfLikes: false,
          time: formatTime(15 * (i + 1)),
          img: 512 + i,
          profileImg: 111 + i,
        };
        arr.push(obj);
      }
      return arr;
    };
    try {
      const PostObjectsArr = await fetchData();
      dispatch(PostObjectsActions.addArray({ arr: PostObjectsArr || [] }));
    } catch (error) {
      console.log("error: " + error);
    }
  };
};
