import React, { ReactElement } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import CheckBox from '..';

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

const Templete: StoryFn<typeof CheckBox> = (args): ReactElement => {
  return <CheckBox {...args} />;
};

export const Primary: Story = {
  render: Templete,
  args: {
    variant: 'primary',
  },
};
