import React, { useState } from "react";
import { Typography, Link, Button } from "@material-ui/core";
import useStyles from "./style"

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h5">
        <Link color="inherit">
          think<span className={classes.bold}>gestalt.</span>tech
        </Link>
      </Typography>
      <Button className={classes.menu} onClick={props.handleOpen}  size="large">
        <Typography variant="h6">
          <span className={classes.bold}>Menu</span>
        </Typography>
      </Button>
    </div>
  );
}
