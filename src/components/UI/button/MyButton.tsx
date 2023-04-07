import React from "react";
interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const MyButton: React.FC<IButtonProps> = ({ children, onClick }) => {
  return <button>{children}</button>;
};

export default MyButton;
