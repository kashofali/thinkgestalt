import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    fontFamily: "Poppins",
    padding: "8rem 0 0 8.5rem ",
  },

  heroImage: {
    width: "100%",
    margin: "0",
  },

  heroSectionBranch: {
    display: "flex",
    marginBottom: "11rem",
    position: "relative",
    paddingBottom: "1rem",
    paddingRight: "8.5rem",
  },

  heroTitle1: {
    fontSize: "9rem",
    fontWeight: "300",
    letterSpacing: "2px",
    margin: 0,
    lineHeight: "1",
    paddingTop: "6rem",
  },

  heroTitle: {
    fontSize: "7rem",
    fontWeight: "300",
    letterSpacing: "3px",
    margin: 0,
    lineHeight: "1",
  },

  heroCaption1: {
    fontFamily: "Poppins-Thin",
    fontWeight: "400",
    width: "58%",
    position: "absolute",
    bottom: "3px",
    lineHeight: "1.5",
  },

  heroCaption2: {
    fontFamily: "Poppins-Thin",
    textAlign: "right",
    lineHeight: "1.5",
    paddingTop: "20rem",
  },

  heroCaption3: {
    fontFamily: "Poppins-Thin",
    lineHeight: "1.5rem",
    marginTop: "2rem",
  },

  serviceImage: {
    height: "688px",
    width: "688px",
    marginTop: "20rem",
    position: "absolute",
    right: "0",
  },

  serviceRoot: {
    marginTop: "3rem",
    width: "70%",
  },
  icons: {
    width: "80%",
  },
  list: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  listText: {
    fontStyle: "italic",
    fontSize: "2.3rem",
    marginLeft: "2rem",
  },

  bold: {
    fontWeight: "1000",
  },
  italic: {
    fontStyle: "italic",
  },
}));
