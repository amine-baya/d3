import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import learnerPageStyle from "../assets/jss/learnerPageStyle.js";
import header from "../assets/img/header_img.jpg";
import learnerMap from "../assets/img/learner_map.jpg";

// import Button from "../components/CustomButtons/Button.js";
import CustomRow from "../components/customRow/CustomRow";
import BubleChart from "../components/bubleChart/BubleChart.js";

const useStyles = makeStyles(learnerPageStyle);
export default function LearnerPage() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxContainer}>
        <div>
          <div className={classes.headerBox}>
            <img src={header} className={classes.headerImg} alt="certificate" />
          </div>
          <div className={classes.gridStatistics}>
            <div className={classes.tableStatistics}>
              <CustomRow title="Create by:" info="Altus Blockchain" />
              <CustomRow title="Date:" info="10/01/2022" />
              <CustomRow title="Contract Address:" info="123456789" />
              <CustomRow title="Token ID:" info="A1B2C3D4E5F6G7H8" />
              <CustomRow title="Token Standard: " info="ERC-1155" />
              <CustomRow title="Blockchain:" info="Polygon" />
            </div>
            <div className={classes.communityEvent}>
              <h4 className={classes.communityEventTitle}> Community events</h4>
              <CustomRow title="Learners " info="223" />
              <CustomRow title="Last" info="22 February 2022" />

              <div className={classes.i}>
                <img
                  src={learnerMap}
                  className={classes.headerImg}
                  alt="certificate"
                />
              </div>
            </div>
          </div>
          <div className={classes.bubleChart}>
            <BubleChart />
          </div>
        </div>

        {/* <div>
          <Button color="primary">Contact-us</Button>
        </div> */}
      </div>
    </div>
  );
}
