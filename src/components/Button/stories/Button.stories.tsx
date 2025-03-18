import React, { ReactElement } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Button from '..';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args): ReactElement => {
  const events = {
    onClick: () => {
      console.log('OnClick Working...');
    },
  };
  return <Button {...args} events={events} />;
};

export const Primary: Story = {
  render: Template,
  args: {
    type: 'submit',
    variant: 'primary',
    label: 'Submit',
  },
};
