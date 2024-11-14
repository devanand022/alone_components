import React, {
  ChangeEvent,
  forwardRef,
  MutableRefObject,
  useState,
  useRef,
  useEffect
} from 'react';
import classnames from 'classnames';
import LabelWithOptional from '../../commonComponents/LabelWithOptional';

interface InputProps {
  className?: string;
  events?: Record<string, unknown>;
  id: string;
  label?: string;
  name: string;
  required?: boolean;
  type?: InputModeType;
  value?: string;
  invalid?: boolean;
  defaultValue?: string;
  invalidInputText?: string;
  pattern?: string;
}

type InputModeType = "text" | "email" | "numeric";

const TextField = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, forwardRef) => {
    const {
      className,
      events,
      id,
      label,
      defaultValue,
      name,
      required = true,
      type = 'text',
      invalid = false,
      invalidInputText,
      pattern
    } = props;

    const [finalvalue, setFinalValue] = useState(' ');
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    React.useImperativeHandle(forwardRef, () => inputRef.current);
    const emptyInputText = 'Required Field.';

    const checkIsInputEmpty = (value: string) => {
      return !((value && value.length > 0) || typeof defaultValue !== "undefined") ;
    };

    useEffect(() => {
      const myRef: HTMLInputElement = inputRef.current;
      setIsInputEmpty(checkIsInputEmpty(myRef.value));
    }, [defaultValue, invalid]);


    const handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
      setIsInputEmpty(checkIsInputEmpty(event.target.value));
      event.persist();
      if (events?.onChange) {
        if (events?.onChange instanceof Function) {
          events.onChange(event);
        }
      }
      setFinalValue(event.target.value);
    };

    const errorText = () => {
      if(invalid && invalidInputText && !isInputEmpty){
        return invalidInputText;
      }
      if(isInputEmpty && required){
        return emptyInputText;
      }
    }

    const elementId = id;
    const errorTextId = `${elementId}__errortext`;
    const classes = classnames('input-container', className);

    const renderedInputProps = {
      name,
      id,
      type,
      "aria-invalid": invalid,
      "aria-required": required,
      ...events,
    }

    return (
      <div className={classes}>
        <LabelWithOptional
          id='name'
          label={label}
          required={required}
        />
        <input
          ref={inputRef}
          value={finalvalue}
          {...renderedInputProps}
          onChange={handleInputEvent}
        />
        <p id={errorTextId}>{errorText()}</p>
      </div>
    );
  },
);

TextField.displayName = "TextField";

export type { InputProps };
export default TextField;
