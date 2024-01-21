import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Section = ({ children, className, ...props }) => {
  const finalClassName = twMerge(clsx("p-4", className));

  return (
    <section className={finalClassName} {...props}>
      {children}
    </section>
  );
};

export default Section;
