import { StoryFn } from "@storybook/react";

export const svgWrapper = (Story: StoryFn) => (
  <svg>
    <Story />
  </svg>
);
