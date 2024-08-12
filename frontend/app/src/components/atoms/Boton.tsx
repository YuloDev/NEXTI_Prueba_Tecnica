import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, type = "button" }) => (
  <button onClick={onClick} disabled={disabled} type={type}>{children}</button>
);

export default Button;