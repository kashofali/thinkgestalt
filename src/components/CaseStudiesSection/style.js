import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    fontFamily: "Poppins",
    padding: "0 8.5rem",
  },
  heading: {
    fontWeight: "300",
    letterSpacing: "2px",
    fontSize: "6.3rem",
    marginBottom: "4.5rem",
  },
  caption: {
    fontFamily: "Poppins-Thin",
    fontWeight: "400",
    fontSize: "2rem",
    paddingTop: "4rem",
    letterSpacing: "2px",
    width: "90%",
    lineHeight: "1.5",
  },
  bold: {
    fontWeight: 1000,
  },
  italic: {
    fontStyle: "italic",
  },
  carouselRoot: {
    width: "85%",
  },
  carousel: {
    position: "relative",
  },
  image: {
    borderRadius: "12px",
    width: "100%",
  },
  text: {
    color: "#fff",
    position: "absolute",
    bottom: "8px",
    paddingLeft: "2rem",
    paddingBottom: "2rem",
  },
  textTitle: {
    fontSize: "14px",
    letterSpacing: "2px",
    opacity: "0.7",
  },
  textDes: {
    fontStyle: "italic",
    marginTop: "0.5rem",
  },
  directionButton: {
    display: "inline",
    margin: "1rem 0.5rem",
  },
}));
