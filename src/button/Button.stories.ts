import { Button } from "./Button";
import type { Meta, StoryObj } from '@storybook/react';
const meta: Meta<typeof Button> = {
  title: "通用/Button按钮",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Default",
    type: 'default',
    size: 'medium',
    danger: false,
    disabled: false,
    ghost: false,
    loading: false,
  }
}
export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    label: "Default",
    type: 'default',
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
    label: "Primary",
  },
}

export const Dashed: Story = {
  args: {
    type: "dashed",
    label: "Dashed",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    label: "Text",
  },
};

export const link: Story = {
  args: {
    type: "link",
    label: "Link",
  },
};