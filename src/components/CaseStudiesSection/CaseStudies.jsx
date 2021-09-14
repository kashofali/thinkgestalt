import React, { useState } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import Carousel from "./Carousel";
import useStyles from "./style"

export default function CaseStudies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        <span className={classes.italic}>Case</span>{" "}
        <span className={classes.bold}>Studies</span>
      </Typography>
      <Carousel />
      <Typography className={classes.caption} variant="h4">
        <span className={classes.italic}>With a decade of experience in </span>
        <span className={classes.bold}>Web and Software Solutions,</span>{" "}
        <span className={classes.italic}>access to</span>{" "}
        <span className={classes.bold}>top tier talent,</span>{" "}
        <span className={classes.italic}>we </span>
        <span className={classes.bold}>Fast Track</span>{" "}
        <span className={classes.italic}>
          the entire process and drive organizational change from within. We
          bring{" "}
        </span>
        <span className={classes.bold}>
          Careful Planning, Alignment, and Aggressive Execution
        </span>
        <span className={classes.italic}> so that you can glimpse the</span>
        <span className={classes.bold}> Future today.</span>
      </Typography>
    </div>
  );
}
