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
    <div className="theme-toggle">
        <button className={cn("fixed max-sm:hidden top-5 right-8 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden cursor-pointer")} onClick={toggleTheme}>
            {isdarkMode ? <span className="text-2xl">🌞</span> : <span className="text-2xl">🌜</span>}
        </button>
    </div>
  )
}