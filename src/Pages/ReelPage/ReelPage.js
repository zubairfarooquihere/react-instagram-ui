import React, {  useEffect, useCallback } from 'react'
import classes from './ReelPage.module.scss';

import Reels from '../../components/ReelPage/Reels/Reels';
import { fetchReelsData } from "../../redux/Reels/ReelsObjects-action";
import { useDispatch, useSelector } from "react-redux";
function ReelPage() {
  const dispatch = useDispatch();
  const weninfo = useSelector((state) => state.weninfo);
  const ReelsObjectsArr = useSelector(
    (state) => state.ReelsObjects.ReelsObjectsArr
  );
  function httpGetAsync(theUrl, callback) {
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    let data = null;
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        data = callback(xmlHttp.responseText);
      }
    };

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return data;
  }

  // callback for the top 8 GIFs of search
  const tenorCallback_search = useCallback(
    async (responsetext) => {
      // parse the json response
      var response_objects = JSON.parse(responsetext);

      let top_10_gifs = response_objects["results"];
      dispatch(fetchReelsData(top_10_gifs));

      return top_10_gifs;
    },
    [dispatch]
  );

  // function to call the trending and category endpoints
  const grab_data = useCallback(async () => {
    // set the apikey and limit
    var apikey = "LIVDSRZULELA";
    var lmt = 35;

    const list = [
      "Pokemon",
      "Tekken",
      "Harry Potter",
      "Fast and Furious",
      "Gym",
      "Cats",
      "Bollywood",
      "Gaming",
    ];
    const randomIndex = Math.floor(Math.random() * list.length);
    // test search term
    var search_term = list[randomIndex];

    // using default locale of en_US
    var search_url =
      "https://g.tenor.com/v1/search?q=" +
      search_term +
      "&key=" +
      apikey +
      "&limit=" +
      lmt;

    return httpGetAsync(search_url, tenorCallback_search);
  }, [tenorCallback_search]);


  useEffect(() => {
    const Asyncgetdata = async () => {
      if(ReelsObjectsArr.length === 0){
        await grab_data();
      }
    };
    Asyncgetdata();
  }, [dispatch, grab_data, ReelsObjectsArr]);
  return (
    <div data-theme={weninfo.darkMode ? "dark" : "light"} className={classes.reelPage}>
      {ReelsObjectsArr.length !== 0 && <Reels ReelsObjectsArr={ReelsObjectsArr} />}
    </div>
  )
}

export default ReelPage