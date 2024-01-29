import React from "react";
import classes from "./Saved.module.scss";

import { save } from "../../../ui/svg/ProfilePage";
import NoData from "../Post/NoData/NoData";
function Saved() {
  let isDataPresent = false;
  return (
    <div className={classes.Post}>
      {!isDataPresent && (
        <NoData
          svg={save}
          title={"Save Photos"}
          description={
            "When you save photos, they will appear on your profile."
          }
          actionTxt={"Save your first photo"}
        />
      )}
    </div>
  );
}

export default Saved;
