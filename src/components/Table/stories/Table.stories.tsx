import React, { ReactElement } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Table from'..';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
}

export default meta;

type Story = StoryObj<typeof Table>;

const Template: StoryFn<typeof Table> = (): ReactElement => {
  return (
    <Table>
      <h1>Table</h1>
    </Table>
  );
};

export const Default: Story = {
  render: Template,
}
