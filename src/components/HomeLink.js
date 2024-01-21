import { useThemeContext } from "../contexts/ThemeContext";
import HomeIcon from "../icons/24/HomeIcon";

const HomeLink = () => {
  const { darkMode } = useThemeContext();

  return (
    <a href="/" className="flex items-center">
      <HomeIcon color={darkMode ? "#e9d5ff" : "#581c87"} />
    </a>
  );
};

export default HomeLink;
