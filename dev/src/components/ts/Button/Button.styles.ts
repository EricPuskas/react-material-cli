/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Button: {
    padding: "10px 16px",
    fontSize: "0.95rem",
    minWidth: 40,
    minHeight: 40,
    borderRadius: 4,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    lineHeight: "normal",
    boxShadow: "none",
    textTransform: "none",
    maxHeight: 40,
    "&:hover": {
      boxShadow: "none"
    }
  },
  primary: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.dark}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  },
  secondary: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.dark}`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark
    }
  },
  default: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
    "&:hover": {
      backgroundColor: theme.palette.grey[50]
    }
  },
  edit: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.light
    }
  },
  delete: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark
    }
  },
  create: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark
    }
  },
  loading: {
    padding: "6px 16px"
  },
  progress: {
    color: theme.palette.common.white
  },
  progressDark: {
    color: theme.palette.secondary.dark
  }
}));

export { useStyles };
