import React from 'react';
import { ColumnInterface } from 'src/utils/types';
import Button from '../Button';

interface TableProps<T> {
  data: T[];
  columns: ColumnInterface<T>[];
  title: string;
}

const Table = <T,>({ data, title, columns }: TableProps<T>) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-header-content">
          <div>{title}</div>
          <Button type="button" label="Add Column" variant="primary" />
        </div>
      </div>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key as string}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={String(row[columns[0].key])}>
                {columns.map((column) => (
                  <td key={String(column.key)}>
                    {String(row[column.key] ?? '-')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
