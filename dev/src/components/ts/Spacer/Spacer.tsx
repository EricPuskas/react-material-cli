/**
 * Imports Material UI components
 */
import Box from "@material-ui/core/Box";

/**
 * Defines the props interface
 */
export interface SpacerProps {
  spacing: number;
}

/**
 * Defines the default props
 */
const defaultProps: SpacerProps = {
  spacing: 0
};

/**
 * Displays the component
 */
export const Spacer: React.FC<SpacerProps> = (props) => {
  const { spacing } = props;

  return <Box marginBottom={`${spacing * 5}px`} />;
};

Spacer.defaultProps = defaultProps;
