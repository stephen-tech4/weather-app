import clsx from "clsx";
import DocumentTitle from "./DocumentTitle";
import HomeLink from "./HomeLink";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import { twMerge } from "tailwind-merge";
import { useThemeContext } from "../contexts/ThemeContext";
import Text from "./typography/Text";

const Main = ({ title, children, ...props }) => {
  const { darkMode } = useThemeContext();

  return (
    <main
      role="main"
      className={twMerge(
        clsx("flex flex-col gap-4 mx-0 sm:mx-[20%] text-purple-900", {
          "text-purple-200": darkMode,
        })
      )}
      {...props}
    >
      <DocumentTitle>{title}</DocumentTitle>

      <div className="flex flex-row justify-between border-b border-purple-300 pb-4">
        <HomeLink />
        <Text className="font-semibold" size="xl">
          Today's Weather
        </Text>
        <ToggleThemeSwitch />
      </div>

      {children}
    </main>
  );
};

export default Main;
