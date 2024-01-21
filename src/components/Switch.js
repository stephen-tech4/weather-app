import { useId } from "@reach/auto-id";
import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Switch = (
  {
    size = "md",
    children,
    labelClassName,
    inputClassName,
    disabled,
    checked,
    onChange,
    ...props
  },
  ref
) => {
  const id = `switch-${useId()}`;
  const finalLabelClassName = twMerge(
    clsx(
      "items-center select-none relative flex justify-between",
      {
        "gap-2": children,
        "cursor-pointer": !disabled,
        "cursor-not-allowed": disabled,
        "text-sm": size === "xs",
      },
      labelClassName
    )
  );

  const finalInputClassName = twMerge(
    clsx(
      "switch",
      {
        "w-16 h-8 before:w-6 before:h-6 checked:before:translate-x-[30px]":
          size === "md",
      },
      {
        "w-12 h-6 before:w-4 before:h-4 checked:before:translate-x-[22px]":
          size === "sm",
      },
      {
        "w-10 h-5 before:w-3 before:h-3 checked:before:translate-x-[18px]":
          size === "xs",
      },
      inputClassName
    )
  );

  return (
    <label htmlFor={id} className={finalLabelClassName}>
      {children && <span>{children}</span>}

      <input
        id={id}
        ref={ref}
        role="switch"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={finalInputClassName}
        {...props}
      />
    </label>
  );
};

export default forwardRef(Switch);
