/**
 * External Imports
 */
import clsx from "clsx";

/**
 * Imports Material UI components
 */
import {
  Typography as TypographyMui,
  TypographyProps as TypographyMuiProps
} from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./Typography.styles";

/**
 * Defines the props interface
 */
export interface TypographyProps {
  variant: "display" | "title" | "subtitle" | "paragraph" | "small" | "caption";
  type?: TypographyMuiProps["variant"];
  className?: string;
  bold?: boolean;
  content?: JSX.Element | string;
  onClick?: () => void;
}

/**
 * Defines the default props
 */
const defaultProps: TypographyProps = {
  variant: "paragraph",
  type: "body1",
  className: "",
  bold: false,
  content: ""
};

/**
 * Displays the component`
 */
export const Typography: React.FC<TypographyProps> = (props) => {
  const { variant, type, className, bold, children, content, onClick } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Defines the button classes
   */
  const typographyClasses = clsx(classes.Typography, classes[variant], {
    [className!]: className,
    [classes.bold]: bold
  });

  return (
    <TypographyMui
      onClick={onClick}
      variant={type}
      className={typographyClasses}
    >
      {content ? content : children}
    </TypographyMui>
  );
};

Typography.defaultProps = defaultProps;
