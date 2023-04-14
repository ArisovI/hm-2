import React from "react";
interface IMyInputProps {
  type: string;
  onChange?: (e: any) => void;
  value?: any;
  placeholder?: string;
}

const MyInput: React.FC<IMyInputProps> = ({
  type,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default MyInput;
