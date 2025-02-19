import Image from 'next/image';
import React from 'react';
import { Inter, Montserrat, DM_Sans } from "next/font/google";
const inter = Inter({ weight: ['500'], subsets: ['latin'] });
const dmsans = DM_Sans({ weight: ["800"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["700"], subsets: ["latin"] });

const Sponsors = () => {
  const SPONSORS = [
    { title: 'Salesforce', logo: '/assets/sponsors/salesforce.png', class: 'h-16 md:h-28' },
    { title: 'Zoho', logo: '/assets/sponsors/zoho.png', class: 'h-16 md:h-24' },
    { title: 'Cisco', logo: '/assets/sponsors/cisco.png', class: 'h-16 md:h-28' },
    { title: 'VMware', logo: '/assets/sponsors/vmware.png', class: 'h-8 md:h-14' },
    { title: 'Schneider', logo: '/assets/sponsors/schneider.png', class: 'h-10 md:h-20' },
    { title: 'Siemens', logo: '/assets/sponsors/siemens.png', class: 'h-8 md:h-16' },
    { title: 'Seagate', logo: '/assets/sponsors/seagate.png', class: 'h-10 md:h-16' },
    { title: 'Amazon', logo: '/assets/sponsors/amazon.png', class: 'h-14 md:h-20' },
    { title: 'CrowdStrike', logo: '/assets/sponsors/crowdstrike.png', class: 'h-8 md:h-16' },
    { title: 'H&R Block', logo: '/assets/sponsors/h&r-block.png', class: 'h-7 md:h-16' },
    { title: 'Google Cloud', logo: '/assets/sponsors/google-cloud.png', class: 'h-8 md:h-16' },
    { title: 'Cred', logo: '/assets/sponsors/cred.png', class: 'h-7 md:h-16' },
    { title: 'Sophos', logo: '/assets/sponsors/sophos.png', class: 'h-6 md:h-12' },
    { title: 'Audius', logo: '/assets/sponsors/audius.png', class: 'h-7 md:h-16' },
    { title: 'FireEye', logo: '/assets/sponsors/fireeye.png', class: 'h-7 md:h-16' },
    { title: 'Secfence', logo: '/assets/sponsors/secfence.png', class: 'h-8 md:h-16' },
    { title: 'Bugcrowd', logo: '/assets/sponsors/bugcrowd.png', class: 'h-7 md:h-16' },
    { title: 'Great Learning', logo: '/assets/sponsors/great-learning.png', class: 'h-7 md:h-16' },
    { title: 'Hack The Box', logo: '/assets/sponsors/hackthebox.png', class: 'h-16' },
    { title: 'PentesterLab', logo: '/assets/sponsors/pentesterlab.png', class: 'h-8 md:h-16' },
  ];

  return (
    <section className="bg-white text-gray-800" id="sponsers">
      <div className="container px-5 py-10 mx-auto w-screen">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="mb-5">
            <span className={`flex flex-col ${montserrat.className} text-2xl md:text-4xl mb-3 font-medium animate-fade-in-left`}>Past Sponsors</span>
            <span className={`${montserrat.className} text-2xl md:text-5xl mb-3 font-medium animate-fade-in-left`}>
              Supporting Our Journey Towards Excellence
            </span>
          </h1>
          <div className="h-2 w-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 rounded animate-fade-in-left"></div>
        </div>
        <div className="flex flex-wrap items-center my-10">
          {SPONSORS.map((sponsor, index) => (
            <div className={index > 11 ? 'w-1/4 xl:w-1/5 pt-2 px-2' : 'w-1/3 lg:w-1/4 xl:w-1/5 py-4 px-2'} key={index}>
              <div className="flex flex-col items-center justify-center h-full space-x-4">
                <Image
                  className={'object-contain cursor-pointer md:p-2 ' + sponsor.class}
                  src={sponsor.logo}
                  alt={sponsor.title}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
