import React from "react";
interface IButtonProps {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  disabled?: any;
}
const MyButton: React.FC<IButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
