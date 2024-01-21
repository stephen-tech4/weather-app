import { useId } from "@reach/auto-id";
import clsx from "clsx";
import { forwardRef } from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import { twMerge } from "tailwind-merge";

/**
 * @example
 *
 * ```
 * <Input
 *    label="Name"
 *    className="text-blue-900"
 *    size="sm"
 *    error="Name is required."
 * />
 * ```
 */
const Input = (
  { label, error, className, size = "md", disabled = false, ...props },
  ref
) => {
  const id = `text-input-${useId()}`;
  const { darkMode } = useThemeContext();

  const wrapperClassName = twMerge(
    clsx("focus-within:text-[#222] flex-1", {
      "focus-within:text-[#eee]": darkMode,
      "opacity-50 cursor-not-allowed": disabled,
    })
  );

  const labelClassName = twMerge(
    clsx("input-label text-ellipsis text-gray-600 bg-none", {
      "text-red-500": error,
      "transition-colors": !error,
    })
  );

  const inputClassName = twMerge(
    clsx("input bg-purple-200", {
      "px-2 pt-5 pb-1": size === "md",
      "px-[0.3125rem] py-[0.25rem] text-sm": size === "sm",
      "input-focus": !error,
      "input-error": error,
      "cursor-not-allowed": disabled,
    })
  );

  return (
    <div data-control="input" className={wrapperClassName}>
      <div className="relative">
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={inputClassName}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck="false"
          disabled={disabled}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <div role="alert" className="text-red-100 mt-1 text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
