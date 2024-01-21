import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { useThemeContext } from "../contexts/ThemeContext";

/**
 * The Button only accepts intent="primary" in this test
 *
 * @example
 *
 * ```
 * <Button
 *    intent="primary"
 *    className=""
 *    onClick={() => console.log("Hello!")}
 *    disabled
 * >
 *   Click me
 * </Button>
 * ```
 */
const Button = (
  {
    className,
    children,
    onClick,
    type = "button",
    size = "md",
    intent = "primary",
    disabled = false,
    loading = false,
    loadingText = "Please wait",
    ...props
  },
  ref
) => {
  const { darkMode } = useThemeContext();

  const finalClassName = twMerge(
    clsx(
      "btn rounded-md text-base px-3 flex justify-center duration-100",
      {
        "bg-violet-500 border-violet-700 hover:bg-violet-600 active:bg-violet-700":
          intent === "primary" && darkMode,
        "bg-purple-600 border-purple-800 hover:bg-purple-700 active:bg-purple-800":
          intent === "primary" && !darkMode,
        // Add more intent here
        // "bg-green-500 border-green-600 hover:bg-green-600 active:bg-green-700": intent === "success"
      },
      className
    )
  );

  return (
    <button
      type={type}
      ref={ref}
      className={finalClassName}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {loading ? loadingText : children}
    </button>
  );
};

export default forwardRef(Button);
