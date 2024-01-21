import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @example
 *
 * ```
 * <Card className="rounded-md">
 *    <Text>Card Heading</Text>
 *    <div>Card content.</div>
 * </Card>
 * ```
 */
const Card = ({ className, children, ...props }) => {
  const finalClassName = twMerge(
    clsx(
      "flex flex-col gap-4 rounded-2xl p-4 border border-gray-200",
      className
    )
  );

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
