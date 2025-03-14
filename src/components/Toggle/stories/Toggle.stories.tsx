import React, { ReactElement } from "react";
import { StoryObj, StoryFn, Meta } from "@storybook/react";
import Toggle from "..";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle
}

export default meta;

type Story = StoryObj<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (): ReactElement => {
  return (
    <Toggle />
  )
}

export const Default: Story = {
  render: Template,
}
