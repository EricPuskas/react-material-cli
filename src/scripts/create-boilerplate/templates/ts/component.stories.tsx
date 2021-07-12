// @ts-nocheck
/**
 * Imports components
 */
import { COMPONENT_NAME } from "./COMPONENT_NAME";

/**
 * Imports types
 */
import { Story, Meta } from "@storybook/react";
import { COMPONENT_NAMEProps } from "./COMPONENT_NAME.types";

/**
 * Defines the Template
 */
const Template: Story<COMPONENT_NAMEProps> = (args) => (
  <COMPONENT_NAME {...args} />
);

/**
 * Default case
 */
export const Default = Template.bind({});

/**
 * Default case props
 */
Default.args = {};

/**
 * Exports the story
 */
export default {
  title: "Components/COMPONENT_NAME",
  component: COMPONENT_NAME
} as Meta;
