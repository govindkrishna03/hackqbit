import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Scrollingfeed from "/src/components/scrollingfeed.js";
import Navbar from "/src/components/navbar"; 
import Competitions from "./competitions";
import Footer from "../components/footer"
const inter = Inter({
  weight:['500'],
  subsets:['latin']
});

const montserrat = Montserrat({
  weight: ["700"], // Ensure weight is in an array
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={` w-screen    bg-white text-black dark:bg-black dark:text-white h-screen  `}> 
      <div className={`${inter.className} p-10 h-[60px] items-center`}>
        <Navbar />
      </div>  
      <div className=" py-10 w-screen "><Scrollingfeed /></div>
      <div className="flex flex-col justify-center items-center h-[500px] sm:h-[800px]  text-center">
        <div ></div>
      <div className={`${inter.className}   text-4xl sm:text-6xl `}>
        India’s Premier 
      </div>
      <div className={`${inter.className} text-4xl sm:text-7xl`}>Cyber Security Conference</div>
     
    </div>
    <div><Competitions /></div>
    <div><Footer /></div>
   </div>
  );
}
