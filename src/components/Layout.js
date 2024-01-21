import { useThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Layout = ({ children }) => {
  const { darkMode } = useThemeContext();

  return (
    <div
      className={twMerge(
        clsx(
          "h-screen relative overflow-x-hidden flex flex-col gap-4 bg-bg-light p-4 text-[#222]",
          {
            "text-[#eee] bg-bg-dark": darkMode,
          }
        )
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
