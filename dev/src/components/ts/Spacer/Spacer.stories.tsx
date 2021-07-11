/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { Spacer, SpacerProps } from "./Spacer";

export default {
  title: "Atoms/Spacer",
  component: Spacer
} as Meta;

/**
 * Defines the Template
 * @param args SpacerProps
 * @returns
 */
const Template: Story<SpacerProps> = (args) => {
  return (
    <>
      <Spacer {...args} />
      Some text with spacing above it
    </>
  );
};

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
  spacing: 10
};
