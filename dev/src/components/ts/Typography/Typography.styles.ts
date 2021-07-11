/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Typography: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary
  },
  display: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    fontSize: "5rem",
    textAlign: "center",
    fontWeight: 500,
    color: theme.palette.common.white,
    fontFamily: "Oxanium",
    textShadow: `3px 0px 2px ${theme.palette.common.black}`,
    [theme.breakpoints.down("lg")]: {
      fontSize: "3.5rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem"
    }
  },
  title: {
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 0
  },
  subtitle: {
    fontSize: "1.2rem",
    fontFamily: "Oxanium",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem"
    }
  },
  paragraph: {
    display: "flex",
    marginTop: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15
  },
  small: {
    fontSize: 12
  },
  caption: {},
  bold: {
    fontWeight: 500
  }
}));

export { useStyles };
