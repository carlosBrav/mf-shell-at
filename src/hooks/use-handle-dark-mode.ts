import { useEffect, useState } from "react";


export const useHandleDarkMode = () => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const handleClick = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true)
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsDarkMode(true)
    }
  }, [])

  return {
    handleClick,
    isDarkMode
  }
}