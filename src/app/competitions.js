import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import Icon from '../shared/icon';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Competitions = () => {
  const COMPETITIONS = [
    {
      title: 'bi0s CTF',
      tagline: 'Top rated Cyber games for global players',
      image: '/assets/images/bi0s-ctf.png',
      link: 'https://ctftime.org/ctf/31',
      audience: 'For Global Athletes',
    },
    {
      title: 'Amrita InCTF Nationals',
      tagline: 'India’s Flagship Cyber Security Competition for Talent Showcasing & Recruitment',
      image: '/assets/images/inctf-nationals.png',
      link: 'https://inctf.in',
      audience: 'For College Students',
    },
    {
      title: 'ShaktiCTF',
      tagline: 'Exclusive Global Championship for Women in Cyber Security',
      image: '/assets/images/shakti-ctf.png',
      link: 'https://shakticon.com/',
      audience: 'For Women',
    },
    {
      title: 'Amrita InCTF Junior',
      tagline: 'India’s First & Largest Capture The Flag Competition for School Students',
      image: '/assets/images/inctf-junior.png',
      link: 'https://junior.inctf.in',
      audience: 'For School Students',
    },
    {
      title: 'Amrita InCTF Professionals',
      tagline: 'Focused on Practical Cyber Security, Secure Coding & Awareness',
      image: '/assets/images/inctf-professionals.png',
      link: 'https://inctf.in',
      audience: 'For Professionals',
    },
  ];

  return (
    <section className="body-font bg-white text-gray-800 dark:bg-black dark:text-white">
      <div className="container px-5 py-12 md:pt-24 mx-auto w-screen">
        <div className="flex flex-wrap w-full mb-6 md:mb-20">
          <div className="lg:w-[70%] w-full mb-6 lg:mb-0">
            <h1 className="mb-5">
              <span className={`${montserrat.className} block text-xl md:text-3xl mb-1 font-light transition-opacity ease-in duration-300 opacity-100 hover:opacity-0 `}>
                5 Annual Competitions
              </span>
              <span className={`${montserrat.className} font-bold md:text-5xl text-3xl transition-opacity ease-in duration-300 opacity-100 hover:opacity-0 `}>
                Bringing out top cyber talents
              </span>
            </h1>
            <div className="h-2 w-48 bg-gradient-to-r from-purple-600 via-red-500 to-red-400 rounded transition-colors "></div>
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
                    <div className={`${montserrat.className} text-accent-1 md:text-lg font-bold title-font mb-4 text-red-500 font-semibold` }>{competition.audience}</div>
                    <Icon icon="arrow-top-right" className="opacity-70 absolute top-1 right-1" size={24} />
                    <div className="h-[100px] sm:h-[150px] md:h-[120px] lg:h-[150px] xl:h-[180px] flex items-center overflow-hidden">
                      <Image
                        className="rounded w-full object-contain object-left transition-transform duration-300 ease-in-out group-hover:scale-105"
                        src={competition.image}
                        height={200}
                        width={320}
                        alt={competition.title}
                      />
                    </div>
                    <p className="opacity-80 text-base hidden md:block mt-1">{competition.tagline}</p>
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
