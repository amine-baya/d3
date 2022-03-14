import React, { createRef, useEffect } from "react";
import * as d3 from "d3";
import { fakeData } from "../../data/fakeData";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import learnerPageStyle from "../../assets/jss/learnerPageStyle.js";
import { pack } from "d3";

const useStyles = makeStyles(learnerPageStyle);
export default function BubleChart() {
  console.log(fakeData);
  const classes = useStyles();
  let ell = createRef();
  const createSVG = () => {
    return d3
      .select(ell)
      .append("svg")
      .attr("width", 800)
      .attr("height", 800)
      .attr("style", "border: thin red solid");
  };
  const pack = (size) => {
    return d3.pack().size(size).padding(3);
  };
  const drawChart = (svg) => {
    let hierachalData = makeHierarchy(fakeData);
    let packLayout = pack([800 - 5, 800 - 5]);
    const root = packLayout(hierachalData);
    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x + 1},${d.y + 1})`);
    leaf
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill-opacity", 0.7)
      .attr("fill", "navy");

    leaf
      .append("text")
      .text((d) => d.data.id)
      .attr("style", "fontSize: 5px, color: red");
  };

  const makeHierarchy = (data) => {
    return d3.hierarchy({ children: data }).sum((d) => d.value);
  };
  useEffect(() => {
    let svg = createSVG();
    drawChart(svg);
  }, fakeData);

  return (
    <div>
      <div ref={(el) => (ell = el)} />
    </div>
  );
}
