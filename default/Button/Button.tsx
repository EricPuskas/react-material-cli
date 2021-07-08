// @ts-nocheck
/**
 * Imports the component styles
 */
import { useStyles } from "./Button.styles";

/**
 * Defines the props interface
 */
export interface ButtonProps {
  text?: string;
}

/**
 * Defines the default props
 */
const defaultProps: ButtonProps = {
  text: "Button"
};

/**
 * Displays the component
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { text } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <button> Hello world! {text} </button>;
};

Button.defaultProps = defaultProps;
