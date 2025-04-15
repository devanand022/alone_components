import React, { ReactElement } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import DropDown from '..';

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

const Template: StoryFn<typeof DropDown> = (args): ReactElement => {
  return <DropDown {...args} />;
};

export const Default: Story = {
  render: Template,
  args: {
    option: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    title: 'Option'
  },
};
