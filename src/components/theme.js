import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className=" transition duration-300 hover:scale-110"
    >
  
      {/* Icon changes based on mode */}
      {darkMode ? (
        <Sun className="text-white " />
      ) : (
        <Moon className="text-black " />
      )}
    </button>
  );
}
