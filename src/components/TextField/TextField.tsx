import React, { forwardRef } from 'react';
import classnames from 'classnames';
import LabelWithOptional from '../../commonComponents/LabelWithOptional';

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
  invalid?: boolean;
}

const TextField = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      className,
      events,
      id,
      inputHelper,
      label = "name", //Temperoy value
      name,
      required = true,
      type = 'text',
      value,
      invalid = false
    } = props;

    const classes = classnames('input-container', className);
    return (
      <div className={classes}>
        <LabelWithOptional
          id='name'
          label={label}
          required={required}
        />
        <input name={name} type={type} id={id} value={value} ref={ref} {...events} />
        {invalid ? (
          <p>Required Field.</p>
        ) : null}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export type { InputProps };
export default TextField;
