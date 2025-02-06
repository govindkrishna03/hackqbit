import React from "react";
import { Montserrat } from "next/font/google";  
const montserrat = Montserrat({
  weight: ["700"], // Ensure weight is in an array
  subsets: ["latin"],
});
const feedItems = [
  "5 COMPETITIONS",
  "2 CONFERENCES",
  "30+ GLOBAL SPEAKERS",
  "1000+ PARTICIPANTS",
  "2 DAYS OF CYBER EXCELLENCE",
  "5 COMPETITIONS",
  "2 CONFERENCES",
  "30+ GLOBAL SPEAKERS",
  "1000+ PARTICIPANTS",
  "2 DAYS OF CYBER EXCELLENCE",
];

function ScrollingFeed() {

  return (
    <div className={`${montserrat.className} w-full overflow-hidden bg-black dark:bg-white text-white dark:text-black sm:h-[40px] h-[20px] text-sm sm:text-[15px] flex items-center`}>
      <div className="flex whitespace-nowrap animate-scroll">
      
        {[...feedItems, ...feedItems].map((item, index) => (
          <h1 key={index} className="mx-5">
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default ScrollingFeed;
