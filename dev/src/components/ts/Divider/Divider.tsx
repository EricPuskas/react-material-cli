/**
 * External Imports
 */
import clsx from "clsx";

/**
 * Imports the component styles
 */
import { useStyles } from "./Divider.styles";

/**
 * Defines the props interface
 */
export interface DividerProps {
  className?: string;
}

/**
 * Defines the default props
 */
const defaultProps: DividerProps = {
  className: ""
};

/**
 * Displays the component
 */
export const Divider: React.FC<DividerProps> = (props) => {
  const { className } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={clsx(classes.Divider, className)} />;
};

Divider.defaultProps = defaultProps;
