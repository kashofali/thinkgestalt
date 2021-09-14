import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";
import serviceItem from "./Services";

export default function ServiceList() {
  const classes = useStyles();

  return (
    <div className={classes.serviceRoot}>
      <List>
        {serviceItem.map((item) => {
          return (
            <ListItem className={classes.list} divider button>
              <ListItemIcon>
                <img className={classes.icons} src={item.image} alt="AppIcon" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={classes.listText} variant="h5">
                    {item.serviceName}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
