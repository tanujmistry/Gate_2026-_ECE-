import { useState, useEffect } from "react";

const DARK_MODE_KEY = "gate-navigator-dark-mode";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem(DARK_MODE_KEY);
    if (saved !== null) {
      return saved === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem(DARK_MODE_KEY, String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
}