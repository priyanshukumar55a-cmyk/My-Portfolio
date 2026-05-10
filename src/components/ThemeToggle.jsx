import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isdarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
    else{
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if(!isdarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDarkMode(!isdarkMode);
  };

  return (
    <button className="p-2 rounded-full transition-colors duration-300 focus:outline-hidden cursor-pointer z-50" onClick={toggleTheme}>
        {isdarkMode ? <span className="text-2xl">🌞</span> : <span className="text-2xl">🌜</span>}
    </button>
  )
}