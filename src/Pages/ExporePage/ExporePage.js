import React, { useState, useEffect, useCallback } from "react";
import classes from "./ExporePage.module.scss";

import ExporeContext from "../../components/ExporePage/ExporeContext/ExporeContext";
import { fetchExploreData } from "../../redux/Explore/ExploreObjects-action";
import { useDispatch, useSelector } from "react-redux";
function ExporePage() {
  const dispatch = useDispatch();
  const ExploreObjectsArr = useSelector(
    (state) => state.ExploreObjects.ExploreObjectsArr
  );
  const [gifArr, setGifArr] = useState([]);
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
  function tenorCallback_search(responsetext) {
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    let top_10_gifs = response_objects["results"];
    //console.log(top_10_gifs[0]["media"][0]["mediumgif"]["url"]);
    setGifArr(top_10_gifs);

    return top_10_gifs;
  }

  // function to call the trending and category endpoints
  const grab_data = useCallback(async () => {
    // set the apikey and limit
    var apikey = "LIVDSRZULELA";
    var lmt = 1;

    // test search term
    var search_term = "excited";

    // using default locale of en_US
    var search_url =
      "https://g.tenor.com/v1/search?q=" +
      search_term +
      "&key=" +
      apikey +
      "&limit=" +
      lmt;

    return httpGetAsync(search_url, tenorCallback_search);
  }, []);

  useEffect(() => {
    const Asyncgetdata = async () => {
      await grab_data();
    };
    if (gifArr.length === 0) {
      Asyncgetdata();
    }
    dispatch(fetchExploreData(gifArr));
  }, [dispatch, grab_data, gifArr]);

  return (
    <div
      // data-theme={weninfo.darkMode ? "dark" : "light"}
      className={classes.explorepage}
    >
      {ExploreObjectsArr.map((id, index) => {
        let gifPosition = { gridRow: "1/3", gridColumn: "3/4" };
        if(index % 2 !== 0){
          gifPosition = { gridRow: "1/3", gridColumn: "1/2" };
        }
        return (
          <ExporeContext
            key={id}
            id={id}
            gifPosition={gifPosition}
          />
        );
      })}
    </div>
  );
}

export default ExporePage;
