import { twMerge } from "tailwind-merge";
import ErrorIcon from "../icons/20/ErrorIcon";
import clsx from "clsx";

/**
 * The Callout only accepts intent="error" in this test
 *
 * @example
 *
 * ```
 * <Callout intent="error">
 *    This is a <strong>Callout</strong>.
 * </Callout>
 * ```
 */
const Callout = ({ intent = "error", children }) => {
  const icons = {
    error: <ErrorIcon color="#ef4444" />,
    // Add more intent icons here
    // info: <InformationIcon color="#aaa" />
  };

  const finalClassName = twMerge(
    clsx("flex flex-row items-center gap-4 p-4 rounded-md", {
      "bg-red-100 text-red-500": intent === "error",
      // Add more intent here
      // "bg-blue-100 text-blue-600": intent === "info"
    })
  );

  return (
    <div className={finalClassName}>
      {icons[intent]}
      {children}
    </div>
  );
};

export default Callout;
