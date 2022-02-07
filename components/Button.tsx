const Button = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className={` dark:bg-red-600 opacity-90 dark:hover:bg-red-700 dark:focus:ring-2 dark:focus:ring-red-900 focus:ring-green-700 focus:outline-none focus:ring-2 text-gray-100 bg-green-500 hover:bg-green-600 shadow-md font-bold py-2 px-4 rounded-lg ${className} `}
      {...props}
    ></button>
  );
};

export default Button;
