import React from "react";

import { tag } from "../../../ui/svg/ProfilePage";
import NoData from "../Post/NoData/NoData";
function Tagged() {
  let isDataPresent = false;
  return (
    <div>
      {!isDataPresent && (
        <NoData
          svg={tag}
          title={"Tagged Photos"}
          description={
            "When you get tagged in photos, they will appear on your profile."
          }
          actionTxt={"Find people"}
        />
      )}
    </div>
  );
}

export default Tagged;
