"use client";

import Image from "next/image";
import DarkModeToggle from "./theme";
import { useState, useEffect } from "react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);


    const toggleDarkMode = () => {
        const isDark = !darkMode;
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <div className="flex  justify-between   items-center  ">

            <div >
                <Image
                    src={darkMode ? "/assets/branding/hackqbit-light.svg" : "/assets/branding/dark.svg"}
                    width={200}
                    height={100}
                    alt="Hackqbit logo"
                />
            </div>
            
            <div >
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </div>
    );
}

export default Navbar;
