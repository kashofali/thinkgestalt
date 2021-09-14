import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundImage: "url(/images/Artwork.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "4rem 10rem 0",
    minHeight: "600px",
    textAlign: "center",
  },

  caption: {
    padding: "10rem 0",
  },

  head1: {
    fontWeight: "300",
    fontStyle: "italic",
    margin: "0",
  },

  head2: {
    fontFamily: "Poppins",
    fontSize: "10rem",
    fontWeight: "1000",
    marginTop: "0",
  },
  
}));
