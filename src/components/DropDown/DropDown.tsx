import React from 'react';
import type { OptionsInterface } from 'src/utils/types';

interface DropDownProps {
  option: OptionsInterface[];
}

const DropDown = (props: DropDownProps) => {
  const { option } = props;
  return (
    <select>
      {option.map((item: OptionsInterface) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
