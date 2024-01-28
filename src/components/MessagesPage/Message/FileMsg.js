import React from "react";

import MoreOption from "./MoreOption";
import DataReaction from "./DataReaction";

function FileMsg(props) {
  const {
    classes,
    data,
    msgBlock,
    emoji,
    index,
    isReactionPresent,
    addReaction,
    setSendMessage,
  } = props;

  let marginBottom = "";
  if (data.reaction) {
    marginBottom = "1.75rem";
  }

  const handleDownloadClick = (event) => {
    if (!event.target.closest('.MoreOption')) {
      handleDownload(data.dataURL, data.name);
    }
  };

  const handleDownload = (fileData, fileName) => {
    console.log("Download");
    // Create a Blob from the file data
    // const blob = new Blob([fileData], { type: "text/plain" });

    // // Create a URL for the Blob
    // const url = window.URL.createObjectURL(blob);

    // // Create a link element
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = fileName; // Set the download attribute to the file name
    // link.click();

    // // Clean up by revoking the Object URL
    // window.URL.revokeObjectURL(url);
  };

  const handleMoreOptionClick = (event) => {
    // Handle your MoreOption functionality here
    // ...

    // Stop propagation to prevent bubbling to parent elements
    event.stopPropagation();
  };

  return (
    <div
      key={index+'textFile'}
      onClick={handleDownloadClick}
      className={`${classes["messageLayout__body--send"]} ${classes[msgBlock]} ${classes[emoji]}`}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        whiteSpace: "pre-wrap",
        backgroundColor: "#efefef",
        color: "black",
        fontWeight: "700",
        padding: "1rem",
        marginBottom
      }}
    >
      <div //Circle in file
        style={{
          height: "3rem",
          width: "3rem",
          borderRadius: "100%",
          backgroundColor: "#e4e4e5",
          margin: "1rem",
        }}
      ></div>
      {data.name}

      <div className="MoreOption" style={{color: "white"}} onClick={handleMoreOptionClick}>
        <MoreOption
          key={index+"textFile"}
          classes={classes}
          setSendMessage={setSendMessage}
          index={index}
        />
      </div>

      {data.reaction && (
        <DataReaction
          key={index+"MoreOption"}
          isReactionPresent={isReactionPresent}
          classes={classes}
          addReaction={addReaction}
          setSendMessage={setSendMessage}
          index={index}
          data={data}
        />
      )}
    </div>
  );
}

export default FileMsg;
