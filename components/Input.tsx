const Input = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      className={`shadow dark:shadow-inner border-0 placeholder-gray-500 dark:bg-gray-50 text-gray-900 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    ></input>
  );
};

export default Input;
