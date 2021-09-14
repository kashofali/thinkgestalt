import React from "react";
import {
  Container,
  Button,
  Typography,
  Grid,
  Divider,
  Collapse,
} from "@material-ui/core";
import services from "../HeroSection/Services";
import useStyles from "./style"

export default function Menu(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Collapse
        in={props.open}
        timeout={(1000)}
        mountOnEnter
        unmountOnExit
      >
        <Container
          maxWidth="xl"
          style={props.open ? { display: "block" } : { display: "none" }}
          className={classes.root}
        >
          <Button onClick={props.handleClose} className={classes.close}>
            Close
          </Button>
          <Typography className={classes.serviceSection} variant="h2">
            Services
          </Typography>
          <Grid container>
            {services.map((service) => {
              return (
                <Grid item xs={6}>
                  <Button className={classes.serviceName}>
                    <Typography color="inherit" variant="h4">
                      {service.serviceName}
                    </Typography>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Divider className={classes.divider} />
          <Button>
            <Typography className={classes.subSection} variant="h2">
              Blogs
            </Typography>
          </Button>
          <Divider className={classes.divider} />
          <Button>
            <Typography className={classes.subSection} variant="h2">
              Contact Us
            </Typography>
          </Button>
        </Container>
      </Collapse>
    </div>
  );
}
