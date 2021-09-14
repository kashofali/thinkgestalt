import React, { useState } from "react";
import {
  Typography,
  Button,
  Link,
  Container,
  Grid,
  Divider,
} from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import MenuSection from "../MenuSection/MenuSection";
import scrollButton from "../../images/Icons/Scroll Down.svg";
import useStyles from "./style";

export default function TopContainer() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <MenuSection open={open} handleClose={handleClick} />
      <div className={classes.root}>
        <Navbar handleOpen={handleClick} />
        <div className={classes.caption}>
          <Typography variant="h1" className={classes.head1}>
            Is Your Enterprise
          </Typography>
          <h2 className={classes.head2}>Future Ready?</h2>
        </div>
        <Button href="#heroSection">
          <img src={scrollButton} alt="scroll-down button" />
        </Button>
      </div>
    </div>
  );
}
