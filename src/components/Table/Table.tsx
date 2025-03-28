import React, { ReactNode } from 'react';

interface TableProps {
  children?: ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <div className={`table-container`}>
      <table>{children}</table>
    </div>
  );
};

export default Table;
