import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @example
 *
 * ```
 * <Text
 *    as="span"
 *    className="font-semibold"
 *    size="sm"
 *    muted
 * >
 *   This is a Text component.
 * </Text>
 * ```
 */
const Text = ({
  as = "p",
  children,
  className,
  muted = false,
  size = "md",
  ...props
}) => {
  const Tag = as;

  const finalClassName = twMerge(
    clsx(
      {
        "text-gray-400": muted,
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-base": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-2xl": size === "2xl",
        "text-3xl": size === "3xl",
      },
      className
    )
  );

  return (
    <Tag className={finalClassName} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
