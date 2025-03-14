import React from 'react';
import classnames from 'classnames';

interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  label: string;
  variant: 'primary' | 'secondary';
  events?: Record<string, unknown>;
}

const Button = (props: ButtonProps) => {
  const { type, label, events, variant } = props;

  const classes = classnames(`button-${variant}-container`);

  return (
    <div className={classes}>
      <button type={type} className={classes} {...events}>
        {label}
      </button>
    </div>
  );
};

export type { ButtonProps };
export default Button;
