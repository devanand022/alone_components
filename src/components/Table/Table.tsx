import React from 'react';
import { ColumnInterface } from 'src/utils/types';

interface TableProps<T> {
  data: T[];
  columns: ColumnInterface<T>[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <div className="table-container">
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
