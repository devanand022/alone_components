import React, { ReactElement } from "react";
import { Meta, StoryObj, StoryFn } from "@storybook/react";
import Loader from "..";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
}

export default meta;

type Story = StoryObj<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args): ReactElement => {
  return <Loader {...args} />
}

export const PrimaryLoader: Story ={
  render: Template,
  args: {
    variant: "primaryLoader"
  },
};

export const DotLoader: Story = {
  render: Template,
  args: {
    variant: "dotLoader",
  },
};

export const LineLoader: Story = {
  render: Template,
  args: {
    variant: "lineLoader",
  },
};
