import React from "react";
import { Typography, Grid, Button, Input, InputLabel } from "@material-ui/core";
import Image4 from "../../images/Images/Home Page/Image 4.png";
import useStyles from "./style"

export default function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        <span className={classes.bold}>Let's talk.</span>{" "}
        <span className={classes.italic}>
          Just enter your details and we will reply within 24 hours
        </span>
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <img src={Image4} alt="" />
        </Grid>
        <Grid item xs={6} className={classes.formGrid}>
          <form className={classes.form}>
            <Input
              className={classes.inputhalf}
              type="text"
              required
              placeholder="Name*"
            />
            <Input
              className={classes.inputhalf}
              margin="dense"
              type="tel"
              required
              placeholder="Phone Number*"
            />
            <Input
              className={classes.input}
              margin="dense"
              type="email"
              fullWidth
              required
              placeholder="Email*"
            />
            <InputLabel htmlFor="queries">How can we help you?</InputLabel>
            <Input
              className={classes.input}
              id="queries"
              rows="4"
              multiline
              fullWidth
            />

            <Button className={classes.btn} variant="contained" type="submit">
              SUBMIT
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
