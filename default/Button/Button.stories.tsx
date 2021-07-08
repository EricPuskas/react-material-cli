// @ts-nocheck
/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button
} as Meta;

/**
 * Defines the Template
 * @param args ButtonProps
 * @returns
 */
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

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