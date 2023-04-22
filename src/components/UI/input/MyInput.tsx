import React from "react";
interface IMyInputProps {
  type: string;
  onChange?: (e: any) => void;
  value?: any;
  placeholder?: string;
  className?: string;
  min?: string;
  max?: string;
  id?: string;
  checked?: any;
  readOnly?: any;
}

const MyInput: React.FC<IMyInputProps> = ({
  type,
  onChange,
  value,
  placeholder,
  className,
  min,
  max,
  id,
  checked,
  readOnly,
}) => {
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
      id={id}
      checked={checked}
      readOnly={readOnly}
    />
  );
};

export default MyInput;
