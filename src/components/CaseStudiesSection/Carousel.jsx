import React, { useState } from "react";
import { Paper, Button, Typography, Slide } from "@material-ui/core/";
import CaseStudy1 from "../../images/Images/Case Studies/Case Study 1.png";
import CaseStudy2 from "../../images/Images/Case Studies/Case Study 2.png";
import next from "../../images/Icons/Right Arrow Btn.svg";
import prev from "../../images/Icons/Left Arrow Btn.svg";
import useStyles from "./style"


const carouselItem = [
  {
    heading: "ROBOTIC PROCESS AUTOMATION",
    subHeading: "80% productivity gains in packaging company.",
    image: CaseStudy1,
  },
  {
    heading: "CLOUD SERVICE",
    subHeading: "Cloud based ecommerce and point of sale solutions.",
    image: CaseStudy2,
  },
];

export default function CarouselItem() {
  const classes = useStyles();

  const [carouselIndex, setCarouselIndex] = useState(1);

  const goToNextSlide = () => {
    let index = carouselIndex;
    let carouselLength = carouselItem.length;
    if (index === carouselLength - 1) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(1);
    }
    
  };

  const goToPrevSlide = () => {
    let index = carouselIndex;
    let carouselLength = carouselItem.length;
    if (index === 0) {
      setCarouselIndex(1);
    } else {
      setCarouselIndex(0);
    }
  };

  setTimeout(() => {
    let index = carouselIndex;
    if (index === carouselItem.length - 1) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(1);
    }
  }, 15000);

  return (
    <div className={classes.carouselRoot}>
      {carouselItem.map((item, index) => {
        return (
          <div
            className={classes.carousel}
            style={
              carouselIndex === index
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <Slide direction="left" in={carouselIndex === index} timeout={5000}>
              <Paper elevation={0}>
                <img className={classes.image} src={item.image} alt="" />
                <div className={classes.text}>
                  <Typography className={classes.textTitle} variant="caption">
                    {item.heading}
                  </Typography>
                  <Typography className={classes.textDes} variant="h5">
                    {item.subHeading}
                  </Typography>
                </div>
              </Paper>
            </Slide>
          </div>
        );
      })}
      <Button className={classes.directionButton}>
        <img src={prev} onClick={goToPrevSlide} alt="" />
      </Button>
      <Typography variant="h6" display="inline">
        {carouselIndex + 1}/{carouselItem.length}
      </Typography>
      <Button className={classes.directionButton}>
        <img src={next} onClick={goToNextSlide} alt="" />
      </Button>
    </div>
  );
}
