'use client';
import { useEffect, useState, useRef } from "react";
import { Inter, Montserrat, DM_Sans } from "next/font/google";
import Scrollingfeed from "/src/components/scrollingfeed.js";
import Navbar from "./navbar";
import Competitions from "./competitions";
import Footer from "../components/footer";
import SponsorCarousel from "../components/sponsorscroll";
import Speakers from "../components/speaker";
import Testimonials from "../components/testimonials";

const inter = Inter({ weight: ['500'], subsets: ['latin'] });
const dmsans = DM_Sans({ weight: ["800"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["700"], subsets: ["latin"] });

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const competitionsRef = useRef(null);
  const speakersRef = useRef(null);
  const testimonialsRef = useRef(null);

 useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getParallaxStyle = (speed = 0.2) => ({
    transform: `translateY(${scrollY * speed}px)`,
    transition: "transform 0.1s ease-out",
  });

  const titleOpacity = Math.max(1 - scrollY / 300, 0);

  return (
    <div className="w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white dark:bg-black dark:text-white">
      {/* Navbar Section */}
      <div className="p-5">
        <Navbar />
      </div>

      {/* Scrolling Feed Section */}
      <div className="w-screen">
        <Scrollingfeed />
      </div>

      {/* Centered Content Section */}
      <div
        className="flex flex-col mt-[100px] sm:mt-[200px] h-[200px] sm:h-[500px] text-center items-center bg-gradient-to-t from-gray-900 via-gray-500 to-gray-300 bg-clip-text text-transparent"
        style={{ transform: `translateY(${scrollY * 0.5}px)`, opacity: titleOpacity }}
      >
        <div className={`${montserrat.className} text-4xl md:text-7xl font-bold`}>India’s Premier</div>
        <div className={`${montserrat.className} text-4xl md:text-7xl font-bold`}>Cyber Security Conference</div>
      </div>

      <div
        className="w-screen"
        ref={competitionsRef}
        style={getParallaxStyle(-0.2)} // Moves up
      >
        <Competitions />
      </div>

      {/* Speakers Section with Parallax */}
      <div className="w-screen" ref={speakersRef} style={getParallaxStyle(speakersRef, 0.15)}>
        <Speakers />
      </div>

      {/* Testimonials Section with Parallax */}
      <div className="" ref={testimonialsRef} style={getParallaxStyle(testimonialsRef, 0.1)}>
        <Testimonials />
      </div>

      {/* Sponsors Section */}
      <div className="flex flex-col items-center text-white justify-center text-center">
        <span className={`${montserrat.className} text-2xl md:text-4xl mb-3 font-medium animate-fade-in-left `}>Our Past Sponsors</span>
        <div className="h-2 w-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 rounded animate-fade-in-left"></div>
      </div>

      {/* Sponsors Carousel Section */}
      <div className="w-screen">
        <SponsorCarousel />
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
