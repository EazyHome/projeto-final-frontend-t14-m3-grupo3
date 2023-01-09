import React from "react";

interface IButtonProps {
  type?: "submit" | "button";
  text: string;
  callback?: () => void;
}

export const Button = ({ text, type, callback }: IButtonProps) => {
  return (
    <>
      <button onClick={callback} type={type}>
        {text}
      </button>
    </>
  );
};
