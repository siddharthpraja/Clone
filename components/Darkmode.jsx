"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="text-2xl animate-pulse ease-in-out duration-500">
      {isDark ? <MdDarkMode  /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggle;
