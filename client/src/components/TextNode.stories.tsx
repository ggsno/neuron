import type { Meta, StoryObj } from "@storybook/react";

import TextNode from "./TextNode";
import { svgWrapper } from "../utils/storybookDecorators";

const meta = {
  title: "Node/TextNode",
  component: TextNode,
  decorators: [svgWrapper],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextNode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    posX: "50%",
    posY: "50%",
    isSelected: false,
    content: "test node",
  },
};

export const Selected: Story = {
  args: {
    posX: "50%",
    posY: "50%",
    isSelected: true,
    content: "test node",
  },
};
