import clsx from "clsx";
import { useThemeContext } from "../contexts/ThemeContext";
import Switch from "./Switch";
import { twMerge } from "tailwind-merge";

const ToggleThemeSwitch = () => {
  const { darkMode, lightMode, toggleTheme } = useThemeContext();

  const inputClassName = twMerge(
    clsx("!border-transparent !bg-purple-200", {
      "before:!bg-violet-500 before:!border-violet-700": darkMode,
      "before:!bg-purple-300 before:!border-purple-400": lightMode,
    })
  );

  return (
    <Switch
      size="sm"
      inputClassName={inputClassName}
      checked={darkMode}
      onChange={toggleTheme}
    >
      {darkMode ? "Dark" : "Light"}
    </Switch>
  );
};

export default ToggleThemeSwitch;
