const Button = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className={`dark:bg-green-50 dark:text-blue-900  border text-white font-bold py-2 px-4 rounded ${className} `}
      {...props}
    ></button>
  );
};

export default Button;
