import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: "11rem 8.5rem 0",
    fontFamily: "Poppins",
  },
  heading: {
    marginBottom: "6rem",
  },
  heading1: {
    fontStyle: "italic",
    fontWeight: "300",
    fontSize: "7rem",
    letterSpacing: "2px",
  },
  heading2: {
    fontWeight: "600",
    fontSize: "7rem",
    letterSpacing: "2px",
  },
  categoriesSection: {
    textAlign: "center",
    paddingTop: "2rem",
  },
  categories: {
    marginBottom: "8.75rem",
  },
  categoriesHeading: {
    fontSize: "4rem",
    fontWeight: "400",
    marginBottom: "3rem",
  },
  categoriesType: {
    fontStyle: "italic",
    fontWeight: "400",
    border: "2px solid",
    borderRadius: "56px",
    padding: "2rem 0",
    marginBottom: "1rem",
    width: "100%",
  },
}));
