import React, { forwardRef } from 'react';

interface InputProps {
  events?: Record<string, unknown>;
  label?: string;
  required?: boolean;
  className?: string;
  name: string;
  id: string;
  type?: string;
  value?: string;
}

const TextField = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      events,
      label,
      required,
      className,
      name,
      id,
      type,
      value
    } = props;
    return (
      <div>
        <input type={type} id={id} value={value} ref={ref} />
      </div>
    );
  },
);

TextField.displayName = "TextField";

export type { InputProps };
export default TextField;
