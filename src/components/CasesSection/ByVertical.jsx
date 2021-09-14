import React from "react";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import useStyles from "./style"

export default function ByVertical() {
  const classes = useStyles();

  return (
    <div className={classes.categories}>
      <Typography variant="h2" className={classes.categoriesHeading}>
        By Vertical
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Healthcare</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Technology</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Education</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Finance</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Legal</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Logistics</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
