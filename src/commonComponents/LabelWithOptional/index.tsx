import React, { ReactElement } from 'react';

type LabelWithOptionalType = {
  label?: string;
  required?: boolean;
  wrapWithLabelElement ?: boolean;
  id?: string;
}
type LabelProps = {
  label?: string;
  required?: boolean;
}

const LabelText = ({ label, required }: LabelProps): ReactElement => (
  <>
    {label} {required ? <span style={{ color: "red" }}>*</span> : ""}
  </>
);

const LabelWithOptional = ({
  label,
  id,
  required,
  wrapWithLabelElement = true
}: LabelWithOptionalType): ReactElement => {
  const renderedprops = {
    label,
    required
  }
  if(wrapWithLabelElement){
    return (
      <label htmlFor={id}>
        <LabelText {...renderedprops} />
      </label>
    );
  }
  return <LabelText {...renderedprops} />;
};

export default LabelWithOptional;
