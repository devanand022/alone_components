import React from 'react';
import classNames from 'classnames';

type CheckBoxVariantType = 'primary' | 'rounded';

interface CheckBoxProps {
  variant?: CheckBoxVariantType;
}

const CheckBox = (props: CheckBoxProps) => {
  const { variant } = props;
  const classes = classNames(`checkbox-${variant}-container`);
  console.log(classes);

  if (variant === 'rounded') {
    return (
      <div className={classes}>
        <input type="checkbox" />
        <svg viewBox="0 0 35.6 35.6">
          <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
          <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
          <polyline className=""></polyline>
        </svg>
      </div>
    );
  }
  return (
    <label htmlFor="check" className={classes}>
      <input id="check" type="checkbox" aria-label="check" />
      <div className="checkmark"></div>
    </label>
  );
};

export type { CheckBoxProps };
export default CheckBox;
