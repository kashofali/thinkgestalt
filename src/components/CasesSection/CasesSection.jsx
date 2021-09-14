import React from "react";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ByRoll from "./ByRoll"
import ByUseCase from "./ByUseCase"
import ByVertical from "./ByVertical"
import useStyles from "./style"


export default function CasesSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant="h1" className={classes.heading1}>
          Built for Mission
        </Typography>
        <Typography variant="h1" className={classes.heading2}>
          Critical Use Cases
        </Typography>
      </div>
      <div className={classes.categoriesSection}>
        <ByRoll/>
        <ByUseCase/>       
        <ByVertical/>
      </div>
    </div>
  );
}
