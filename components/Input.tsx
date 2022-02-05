import { useState } from "react";

const Input = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      {...props}
    ></input>
  );
};

export default Input;
