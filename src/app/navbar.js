"use client";

import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "../components/theme";

import { DM_Sans,Inter } from "next/font/google";
import { useState, useEffect } from "react";

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Why Sponsor Us", path: "/why-sponsor-us" },
];
const dmsans = DM_Sans({
  weight: ["800"], // Ensure weight is in an array
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["500"], // Ensure weight is in an array
  subsets: ["latin"],
});
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
   <section className="sm:p-10 p-2 overflow-x-hidden">
    <div className="container">
        <div className="grid grid-cols-2 border border-white/15 rounded-full items-center justify-between  sm:p-0 sm:px-4  ">
        <div className=" w-auto ml-5">
    <Link  href="/"><Image
        src={darkMode ? "/assets/branding/dark.svg" : "/assets/branding/hackqbit-light.svg"}
        width={200}
        height={50}
        
        className="p-5  "
        alt="Hackqbit logo"
       
    /></Link>
</div>

<div className="flex justify-end p-6 space-x-4">
  {/* SVG icon */}
  <svg 
    className="md:hidden main-grid-item-icon" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="none" 
    stroke="white" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2"
  >
    <line x1="21" x2="3" y1="10" y2="10" />
    <line x1="21" x2="3" y1="6" y2="6" />
    <line x1="21" x2="3" y1="14" y2="14" />
    <line x1="21" x2="3" y1="18" y2="18" />
  </svg>

<Link href="/about" className={`${dmsans.className}sm:text-white  sm:px-[30px]  md:text-[0.9rem]   lg:block hidden font-bold hover:underline`}>About Us</Link>
<Link href="/sponsorus" className={`${dmsans.className} sm:text-white sm:px-[30px]  md:text-[0.9rem]   lg:block hidden font-bold hover:underline`}>Why Sponsor Us</Link>

</div>

        </div>
    </div>
   </section>
  );
}

export default Navbar;


