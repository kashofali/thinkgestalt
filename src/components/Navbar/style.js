import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    textAlign: "left",
    position: "relative"
  },

  title: {
    display: "inline-block",
    fontSize: "1.6rem",
  },

  menu: {
    position: "absolute",
    right: "0",
    backgroundColor: "white",
    padding: "0.5rem 2rem",
    borderRadius: "24px"
  },

  bold: {
    fontWeight: 1000,
  },
}));
