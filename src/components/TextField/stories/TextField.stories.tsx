import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import TextField, { InputProps } from '../TextField';

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
}

export default meta;

type Story = StoryObj<typeof TextField>;

const Template: StoryFn<InputProps> = (args): ReactElement => {
  const [value, setValue] = useState("");
  const events = {
    OnChange: (e: ChangeEvent<HTMLInputElement>) => {
      console.log("On ChangeEvent Fired");
      setValue(e.target.value);
    },
  };
  return <TextField {...args} value={value} events={events} />
};

export const Default: Story = {
  render: Template,
  args: {
    label: "Name",
    required: true,
    id: "TextFieldExample"
  },
  parameters: {
    controls: {
      include: [ "label", "required" ],
    },
  },
};
