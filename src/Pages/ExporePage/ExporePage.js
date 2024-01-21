import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./ExporePage.module.scss";

import ExporeContext from "../../components/ExporePage/ExporeContext/ExporeContext";
import { fetchExploreData } from "../../redux/Explore/ExploreObjects-action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../ui/Spinner/Spinner";
let length = 0;
let scrollGlobal = 0;

function ExporePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const myRef = useRef();
  const ExploreObjectsArr = useSelector(
    (state) => state.ExploreObjects.ExploreObjectsArr
  );
  //console.log(ExploreObjectsArr);
  //const [gifArr, setGifArr] = useState([]);
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
  const tenorCallback_search = useCallback(async (responsetext) => {
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    let top_10_gifs = response_objects["results"];
    //console.log(top_10_gifs[0]["media"][0]["mediumgif"]["url"]);
    //setGifArr(top_10_gifs);
    dispatch(fetchExploreData(top_10_gifs));

    return top_10_gifs;
  }, [dispatch]);

  // function to call the trending and category endpoints
  const grab_data = useCallback(async () => {
    // set the apikey and limit
    var apikey = "LIVDSRZULELA";
    var lmt = 10;

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

  const handleScroll = () => {
    scrollGlobal = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const Asyncgetdata = async () => {
      await grab_data();
    };

    if (
      scrollGlobal === 0 &&
      length === 0
    ) {
      Asyncgetdata();
    } else {
      window.scrollTo({ top: scrollGlobal, behavior: "instant" });
    }

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Asyncgetdata();
        }, 2300);
      }
    });
    observer.observe(myRef.current);
    setLoading(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, grab_data]);

  return (
    <div
      // data-theme={weninfo.darkMode ? "dark" : "light"}
      className={classes.explorepage}
    >
      {ExploreObjectsArr.map((id, index) => {
        length = index;
        let gifPosition = { gridRow: "1/3", gridColumn: "3/4" };
        if (index % 2 !== 0) {
          gifPosition = { gridRow: "1/3", gridColumn: "1/2" };
        }
        return (
          <ExporeContext
            key={id}
            ExporeContextIndex={index}
            id={id}
            gifPosition={gifPosition}
          />
        );
      })}

      <div ref={myRef} className={classes.bottom} />
      <div className={classes.loader}>
        {loading && <Spinner width={"5.5em"} color={"rgb(225, 225, 225)"} />}
      </div>
    </div>
  );
}

export default ExporePage;
