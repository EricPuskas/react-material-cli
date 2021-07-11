/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { Divider, DividerProps } from "./Divider";

export default {
  title: "Atoms/Divider",
  component: Divider
} as Meta;

/**
 * Defines the Template
 * @param args DividerProps
 * @returns
 */
const Template: Story<DividerProps> = (args) => <Divider {...args} />;

/**
 * Default case
 */
export const Default = Template.bind({});

/**
 * Put your component props in here
 *
 * Example:
 * Default.args = {
 *  text: "Hello World"
 * }
 *
 * Assuming that the component expects a prop text that is a string.
 */
Default.args = {};
