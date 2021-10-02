// @ts-nocheck
/**
 * Imports styled components
 */
import { StyledDiv } from "./COMPONENT_NAME.styles";

/**
 * Imports types
 */
import { COMPONENT_NAMEProps } from "./COMPONENT_NAME.types";

/**
 * Defines the default props
 */
const defaultProps: COMPONENT_NAMEProps = {
  text: "COMPONENT_NAME"
};

/**
 * Displays the component
 */
export const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = (props) => {
  const { text } = props;

  return <StyledDiv className="COMPONENT_NAME-root">{text}</StyledDiv>;
};

COMPONENT_NAME.defaultProps = defaultProps;
