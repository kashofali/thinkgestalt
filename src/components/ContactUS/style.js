import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    fontFamily: "Poppins",
    margin: "8rem 8.5rem",
    position: "relative",
  },
  heading: {
    fontSize: "5rem",
    width: "80%",
    lineHeight: "1.2",
  },
  formGrid: {
    fontWeight: "400",
    position: "absolute",
    top: "300px",
    right: "0px",
  },
  input: {
    margin: "2rem 2rem 2rem 0",
  },
  inputhalf: {
    margin: "2rem 2rem 2rem 0",
    width: "45%",
  },
  btn: {
    backgroundColor: "#0A0A0A",
    "&:hover": {
      backgroundColor: "#0A0A0A",
    },
    borderRadius: "24px",
    color: "#fff",
    fontStyle: "italic",
    fontSize: "1rem",
    fontWeight: "400",
    padding: "0.5rem 2rem",
    position: "absolute",
    right: "0",
    marginTop: "1rem",
  },
  bold: {
    fontWeight: "1000",
  },
  italic: {
    fontStyle: "italic",
  },
}));
