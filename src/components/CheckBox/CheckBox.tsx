import React from 'react';
import classNames from 'classnames';

type CheckBoxVariantType = 'primary';

interface CheckBoxProps {
  variant?: CheckBoxVariantType;
}

const CheckBox = (props: CheckBoxProps) => {
  const { variant } = props;
  const classes = classNames(`checkbox-${variant}-container`);
  return (
    <label htmlFor="check" className={classes}>
      <input id="check" type="checkbox" aria-label="check" />
      <div className="checkmark"></div>
    </label>
  );
};

export type { CheckBoxProps };
export default CheckBox;
