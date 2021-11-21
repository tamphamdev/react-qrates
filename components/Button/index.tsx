import React from "react";

type Button = {
  children: React.ReactNode;
  [x: string]: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Button> = (props, { children }) => {
  return (
    <button {...props} onClick={props.onClick ? () => props.onClick() : null}>
      {children}
    </button>
  );
};

export default Button;
