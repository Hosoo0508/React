
import React from "react";
import "./Button.css";

interface ButtonProps {
    size: "large" | "medium" | "small";
    state: "default" | "pressed" | "focused" | "hover" | "disabled";
    variant: "text" | "filled" | "outline";
    color: "primary" | "gray" | "destructive" | "secondary";
    className: any;
  }
  
  export const Button = ({
  size = "large",
  color = "primary",
  variant = "text",
  state = "default",
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};


export default Button;