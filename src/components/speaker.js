import React, { useState } from "react";
import SpeakerCard from "./SpeakerCard";
import { Inter, Montserrat, DM_Sans } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({
  weight: ["400","700"],
  subsets: ["latin"],
});
const Speakers = ({scrollY}) => {
  const [selectedTab, setSelectedTab] = useState("business");
  const parallaxSpeed = 0.5;
  const maxTranslateY = -300; // Maximum height to move up

  // Calculate dynamic translation
  const translateY = Math.max(scrollY * -parallaxSpeed, maxTranslateY);
  const SPEAKERS = {
    
    business: [
      {
        name: 'Rinki Sethi',
        title: 'CISO & VP, Twitter',
        image: '/assets/speakers/past/rinki-sethi.jpeg',
      },
      {
        name: 'Arundhati Bhattacharya',
        title: 'CEO, Salesforce India',
        image: '/assets/speakers/past/arundhati-bhattacharya.png',
      },
      {
        name: 'Atanu Chakraborty',
        title: 'Chairman, HDFC Bank',
        image: '/assets/speakers/past/atanu-chakraborty.png',
      },
      {
        name: 'Joshua Brown',
        title: 'CISO & VP, H&R Block',
        image: '/assets/speakers/past/joshua-brown.png',
      },
      {
        name: 'Suvabrata Sinha',
        title: 'CISO, NXP Semiconductors',
        image: '/assets/speakers/past/suvabrata-singh.png',
      },
      {
        name: 'Sanju Misra',
        title: 'CISO & VP, Alnylam Pharma',
        image: '/assets/speakers/past/sanju-misra.png',
      },
      {
        name: 'Dotan Sagi',
        title: 'Founder & CEO, Cinten',
        image: '/assets/speakers/past/dotan-sagi.png',
      },
      {
        name: 'Chris Caren',
        title: 'CEO, Turnitin',
        image: '/assets/speakers/past/chris-caren.png',
      },
    ],
    government: [
      {
        name: 'Lt. Gen. Dr. Rajesh Pant',
        title: 'National Cyber Security Coordinator, PMO, Government of India',
        image: '/assets/speakers/past/rajesh-pant.jpg',
      },
      {
        name: 'Ajay Prakash Sawhney',
        title: 'Secretary, Ministry of Electronics & IT, GoI',
        image: '/assets/speakers/past/ajay-prakash-sawhney.jpg',
      },
      {
        name: 'Neeta Verma',
        title: 'Director General, National Informatics Centre',
        image: '/assets/speakers/past/neeta-verma.png',
      },
      {
        name: 'Eric Falt',
        title:
          'Director & UNESCO Representative, India, Bhutan, Maldives & Sri Lanka',
        image: '/assets/speakers/past/eric-falt.jpg',
      },
      {
        name: 'Liora Itkin',
        title:
          'Head of Cyber Sec. Dept. (Blue Team), Israeli Military Intelligence',
        image: '/assets/speakers/past/liora-itkin.jpeg',
      },
      {
        name: 'Micha Weis',
        title: 'Cyber Security Advisor, Ministry of Finance, Israel',
        image: '/assets/speakers/past/micha-weis.jpeg',
      },
      {
        name: 'Christina Skouloudi',
        title: 'Cyber Security Officer, European Union - ENISA',
        image: '/assets/speakers/past/christina-skouloudi.png',
      },
    ],
    security: "/assets/speakers/past/security-researchers.png",
  };


  return (
    <section className="from-slate-800 to-stone-900 text-white w-screen transition-transform duration-500"  style={{ transform: `translateY(${translateY}px)` }}>
      <div className="container py-12 md:py-24 mx-auto w-screen">
        <div className="flex px-5 flex-wrap w-full mb-6 md:mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="mb-[10px]">
              <span className={`${montserrat.className} block text-xl md:text-3xl  font-light animate-fade-in-left animation-delay-600 `}>Past Speakers</span>
              <span className={`${montserrat.className} block font-bold md:text-5xl text-3xl animate-fade-in-left animation-delay-600`}>
                Thought Leaders Who Inspired & Enlightened
              </span>
            </h1>
            <div className="h-2 w-[200px] bg-gradient-to-r from-purple-600 via-red-500 to-red-400 rounded animate-fade-in-left animation-delay-500"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-10 mb-8 px-10">
          {["business", "government", "security"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedTab(category)}
              className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all 
                ${selectedTab === category ? "bg-primary text-white shadow-lg" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              {category === "business" ? "Business Leaders & CXOs" : category === "government" ? "Government & Institutional Leaders" : "Security Researchers & Community Leaders"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {selectedTab !== "security" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {SPEAKERS[selectedTab].map((speaker) => (
                <SpeakerCard speaker={speaker} key={speaker?.name} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center w-full items-center grayscale hover:grayscale-0"> 
              <Image
                alt="Security Researchers & Community Leaders"
                src={SPEAKERS.security}
                width={1200}
                height={1000}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
