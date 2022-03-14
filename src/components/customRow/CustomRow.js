import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import learnerPageStyle from "../../assets/jss/learnerPageStyle.js";

const useStyles = makeStyles(learnerPageStyle);
export default function CustomRow({ title, info }) {
  const classes = useStyles();
  return (
    <div className={classes.customRow}>
      <span>{title}</span>
      <span>{info}</span>
    </div>
  );
}
