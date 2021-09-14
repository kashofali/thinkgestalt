import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Image1 from "../../images/Images/Home Page/Image 1.png";
import Image2 from "../../images/Images/Home Page/Image 2.png";
import Image3 from "../../images/Images/Home Page/Image 3.png";
import ServiceList from "./ServiceList";
import useStyles from "./style"

export default function HeroSection() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="heroSection">
      <div className={classes.heroSectionBranch}>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="subtitle1"
              className={classes.heroTitle1}
            >
              <span className={classes.bold}>We</span> <span className={classes.italic}>Are</span> think{" "}
              <span className={classes.bold}>gestalt</span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img src={Image1} className={classes.heroImage} alt="heroImage1" />
          </Grid>
        </Grid>

        <Typography className={classes.heroCaption1} variant="h5">
          We're a group of designers and developers who treats our own company
          as a product. How we work today is the result of a decade of
          iterations on our processes and tools. We work in small teams, using
          the latest tools to create a transparent and collaborative space.
        </Typography>
      </div>

      <div className={classes.heroSectionBranch}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="subtitle1" class={classes.heroTitle}>
              <span className={classes.bold}>What We</span> <span className={classes.italic}>Do</span>
            </Typography>
            <img src={Image2} className={classes.heroImage} alt="heroImage2" />
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.heroCaption2} variant="h5">
              We transform organisations from within. We work directly with
              executives at large organisations to reimagine their future.
              Together, we define a single Northstar based on business
              priorities to design better processes, products and services.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.heroSectionBranch}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="subtitle1" class={classes.heroTitle}>
              <span className={classes.italic}>Our</span> <span className={classes.bold}>Services</span>
            </Typography>
            <Typography className={classes.heroCaption3} variant="h5">
              Stitching tech stacks to come up with a comprehensive solution
              that transforms your business.
            </Typography>

            <div>
              <ServiceList />
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={Image3} className={classes.serviceImage} alt="serviceImage" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
