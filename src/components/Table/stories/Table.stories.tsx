import React, { ReactElement } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ColumnInterface } from '../../../utils/types';
import Table from '..';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const Template: StoryFn<typeof Table> = (args): ReactElement => {
  return (
    <Table {...args}>
      <h1>Table</h1>
    </Table>
  );
};

interface OptionsTypeInterface {
  id: number;
  entry?: number;
  target?: number;
  success?: boolean;
  date?: string;
  platform?: string;
  stoploss?: number;
  profit?: number;
  percentage?: number;
  reason?: string;
  symbol?: string;
  entryType?: string;
}

const Columns: ColumnInterface<OptionsTypeInterface>[] = [
  { key: 'id', label: 'ID' },
  { key: 'date', label: 'Date' },
  { key: 'symbol', label: 'Symbol' },
  { key: 'entry', label: 'Entry' },
  { key: 'stoploss', label: 'StopLoss' },
  { key: 'target', label: 'Target' },
  { key: 'success', label: 'Success' },
];

const data: OptionsTypeInterface[] = [
  {
    id: 1,
    entry: 100,
    target: 200,
    success: true,
    date: '2023-01-01',
    stoploss: 90,
    symbol: 'BTCUSDT',
  },
  {
    id: 2,
    entry: 150,
    target: 250,
    success: false,
    date: '2023-01-02',
    stoploss: 140,
    symbol: 'ETHUSDT',
  },
  {
    id: 3,
    entry: 200,
    target: 300,
    success: true,
    date: '2023-01-03',
    stoploss: 190,
    symbol: 'XRPUSDT',
  },
];

export const Default: Story = {
  render: Template,
  args: {
    columns: Columns,
    data: data,
  },
};
