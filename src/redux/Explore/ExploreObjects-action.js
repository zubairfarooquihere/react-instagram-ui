import { ExploreObjectsActions } from "./ExploreObjects";
import {
  generateRandomNumbers,
  generateRandomCommentsWithUser,
} from "../../Data/Name/Name";
import { v4 as uuid } from "uuid";

export const fetchExploreData = (gifArr) => {
  return async (dispatch) => {
    const fetchData = async () => {
      //console.log(gifArr);
      const callData = gifArr.length;
      let arr = [];
      for (let i = 0; i < callData; i++) {
        const commentsArr = generateRandomCommentsWithUser(4);
        const likesArr = generateRandomNumbers(4);

        let obj = {
          id: "Explore" + uuid() + i,
          commentsArr: commentsArr,
          likes: likesArr,
          img: [250 + i + 1, 250 + i + 2, 250 + i + 3, 250 + i + 4],
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
