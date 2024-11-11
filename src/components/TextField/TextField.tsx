import React, { forwardRef } from 'react';
import classnames from 'classnames';
import './TextField.scss';

interface InputProps {
  className?: string;
  events?: Record<string, unknown>;
  id: string;
  inputHelper?: string;
  label?: string;
  name: string;
  required?: boolean;
  type?: string;
  value?: string;
}

const TextField = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      className,
      events,
      id,
      inputHelper,
      label,
      name,
      required = true,
      type,
      value,
    } = props;

    const classes = classnames('input-container', className);
    return (
      <div className={classes}>
        <input name={name} type={type} id={id} value={value} ref={ref} />
      </div>
    );
  },
);

TextField.displayName = "TextField";

export type { InputProps };
export default TextField;
