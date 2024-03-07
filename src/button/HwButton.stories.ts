import type { Meta, StoryObj } from "@storybook/react";

import { HwButton } from "./hwButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/HwButton",
  component: HwButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof HwButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: { args: { label: string; type: string } } = {
  args: {
    type: "primary",
    label: "primary",
  },
};

export const Secondary: { args: { label: string; type: string } } = {
  args: {
    type: "dashed",
    label: 'dashed',
  },
};

