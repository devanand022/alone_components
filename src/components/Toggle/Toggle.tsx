import React from 'react';

const Toggle = () => {
  return (
    <label htmlFor="toggle" className="toggle-switch">
      <input id="toggle" type="checkbox" aria-label="toggle" />
      <div className="toggle-switch-background">
        <div className="toggle-switch-handle"></div>
      </div>
    </label>
  );
};

export default Toggle;
