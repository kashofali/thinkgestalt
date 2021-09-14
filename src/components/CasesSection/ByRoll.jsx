import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "./style"


export default function ByRoll() {
  const classes = useStyles();
  return (
    <div className={classes.categories}>
      <Typography variant="h2" className={classes.categoriesHeading}>
        By Role
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4} >
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">CTO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Agency Director</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.categoriesType}>
            <Typography variant="h4" >
              Engineering VP
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Design Director</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Product Manager</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.categoriesType}>
            <Typography variant="h4" >
              Project Manager
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
