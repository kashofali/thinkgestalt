import React from "react";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import useStyles from "./style"

export default function ByUseCase() {
  const classes = useStyles();

  return (
    <div className={classes.categories}>
      <Typography variant="h2" className={classes.categoriesHeading}>
        By Use Case
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Go from design to development</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Higher Developers on Demand</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Web-to-Mobile Conversion</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Digital Transformation Development</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Business Intelligence and Analytics</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.categoriesType}>
            <Typography variant="h4">Regulatory Compliance Development</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
