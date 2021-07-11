/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { Typography, TypographyProps } from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography
} as Meta;

/**
 * Defines the Template
 * @param args TypographyProps
 * @returns
 */
const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

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
Default.args = {
  bold: true,
  variant: "title",
  content: "Phoenix"
};
