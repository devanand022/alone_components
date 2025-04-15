import React from 'react';
import type { OptionsInterface } from 'src/utils/types';

interface DropDownProps {
  option: OptionsInterface[];
  title: string;
}

const DropDown = (props: DropDownProps) => {
  const { option, title } = props;
  const [selectedOption, setSelectedOption] = React.useState('');
  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown-select">{title}</label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        id="dropdown-select"
      >
        {option.map((item: OptionsInterface) => (
          <option key={item.value} value={item.value} selected>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
