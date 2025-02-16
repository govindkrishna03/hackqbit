"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import Icon from "../shared/icon";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Competitions = ({ scrollY }) => {
  // Adjust this value to control how much it moves up
  const parallaxSpeed = 0.5;
  const maxTranslateY = -300; // Maximum height to move up

  // Calculate dynamic translation
  const translateY = Math.max(scrollY * -parallaxSpeed, maxTranslateY);

  const COMPETITIONS = [
    {
      title: "bi0s CTF",
      tagline: "Top rated Cyber games for global players",
      image: "/assets/images/bi0s-ctf.png",
      link: "https://ctftime.org/ctf/31",
      audience: "For Global Athletes",
    },
    {
      title: "Amrita InCTF Nationals",
      tagline:
        "India’s Flagship Cyber Security Competition for Talent Showcasing & Recruitment",
      image: "/assets/images/inctf-nationals.png",
      link: "https://inctf.in",
      audience: "For College Students",
    },
    {
      title: "ShaktiCTF",
      tagline: "Exclusive Global Championship for Women in Cyber Security",
      image: "/assets/images/shakti-ctf.png",
      link: "https://shakticon.com/",
      audience: "For Women",
    },
    {
      title: "Amrita InCTF Junior",
      tagline:
        "India’s First & Largest Capture The Flag Competition for School Students",
      image: "/assets/images/inctf-junior.png",
      link: "https://junior.inctf.in",
      audience: "For School Students",
    },
    {
      title: "Amrita InCTF Professionals",
      tagline: "Focused on Practical Cyber Security, Secure Coding & Awareness",
      image: "/assets/images/inctf-professionals.png",
      link: "https://inctf.in",
      audience: "For Professionals",
    },
  ];

  return (
    <section
      className={`from-slate-800 to-stone-900 text-white w-screen transition-transform duration-500`}
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="container px-5 md:pt-24 mx-auto w-screen">
        <div className="flex flex-wrap mb-6 md:mb-10">
          <div className="lg:w-[70%] mb-5">
            <h1 className="mb-5 overflow-hidden">
              <span
                className={`${montserrat.className} block text-xl md:text-3xl mb-3 font-light animate-fade-in-left animation-delay-600`}
              >
                5 Annual Competitions
              </span>
              <span
                className={`${montserrat.className} block font-bold md:text-5xl text-3xl h-[70px] animate-fade-in-left animation-delay-600`}
              >
                Bringing out top cyber talents
              </span>
            </h1>
            <div className="h-2 w-[200px] bg-gradient-to-r from-purple-600 via-red-500 to-red-400 rounded animate-fade-in-left animation-delay-500"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {COMPETITIONS.map((competition) => (
            <div
              className="xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 p-1 md:p-2 group transform transition-all duration-300 ease-in-out hover:scale-105"
              key={competition.title}
            >
              <Link href={competition.link} target="_blank">
                <div className="bg-transparent p-0.5 rounded-lg h-full text-black relative overflow-hidden group">
                  <div className="p-2 md:p-4 rounded-lg bg-white transition duration-200 border h-full relative group-hover:shadow-xl group-hover:scale-105">
                    <div
                      className={`${montserrat.className} text-accent-1 md:text-lg title-font mb-4 text-red-500 font-semibold`}
                    >
                      {competition.audience}
                    </div>
                    <Icon
                      icon="arrow-top-right"
                      className="opacity-70 absolute top-1 right-1"
                      size={24}
                    />
                    <div className="h-[100px] sm:h-[150px] md:h-[120px] lg:h-[150px] xl:h-[180px] flex items-center overflow-hidden">
                      <Image
                        className="rounded w-full object-contain object-left transition-transform duration-300 ease-in-out group-hover:scale-105"
                        src={competition.image}
                        height={200}
                        width={320}
                        alt={competition.title}
                      />
                    </div>
                    <p className="opacity-80 text-base hidden md:block mt-1">
                      {competition.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
