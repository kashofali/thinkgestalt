import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    padding: "8rem 8.5rem ",
    backgroundColor: "#0A0A0A",
    color: "#fff",
    minHeight: "60rem",
    position: "relative",
  },
  container: {
    display: "flex",
  },
  close: {
    color: "#fff",
    borderRadius: "24px",
    fontSize: "1.3rem",
    position: "absolute",
    right: "8.5rem",
    padding: "0.5rem 2rem",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  subSection: {
    color: "#fff",
    fontWeight: "600",
    letterSpacing: "2px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  serviceSection: {
    color: "#fff",
    fontWeight: "600",
    letterSpacing: "2px",
    margin: "2rem 0",
  },
  serviceName: {
    color: "#fff",
    fontStyle: "italic",
    margin: "1rem 1rem 1rem 0",
    borderRadius: "24px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  divider: {
    backgroundColor: "#fff",
    margin: "2rem 0",
  },
}));
