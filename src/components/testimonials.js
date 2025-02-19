import React from 'react';
import Image from 'next/image';
import { Inter, Montserrat, DM_Sans } from "next/font/google";
const montserrat = Montserrat({
  weight: ["400","700"],
  subsets: ["latin"],
});
const Testimonials = () => {
  const data = [
    {
      name: 'Shajith Moosa',
      position: 'Director, APJC Cisco',
      image: '/assets/testimonials/shajith-moosa.jpg',
      message: `Amrita InCTF is one of the best events I have ever seen in a long time. I have seen activities in this event which are really engaging.`,
    },
    {
      name: 'Syed Nayeem Pasha',
      position: 'Senior Manager, Cisco',
      image: '/assets/testimonials/syed-nayeem-pasha.jpeg',
      message: `I would like to thank Amrita and Team bi0s for investing this much time and effort for organising such a wonderful event, spreading the importance of cyber security.`,
    },
    {
      name: 'Madhusudhan H N',
      position: 'Director of Security Engineering, VMware',
      message: `I greatly appreciate the effort put forward by Amrita and bi0s for conducting Amrita InCTF. I strongly recommend InCTF to all the students and professionals who are planning to build a career in cybersecurity.`,
    },
  ];

  return (
    <section className="body-font from-slate-800 to-stone-900 text-white w-screen transition-transform duration-500">
      <div className="container px-5 py-12 md:py-24 mx-auto w-screen">
        <div className="flex flex-wrap w-full mb-6 md:mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="mb-5">
              <span className={`${montserrat.className} block text-xl md:text-3xl  font-light animate-fade-in-left animation-delay-600 `}>Testimonials</span>
              <span className={`${montserrat.className} block font-bold md:text-5xl text-3xl animate-fade-in-left animation-delay-600`}>
                Industry Voices on Our Impact and Success
              </span>
            </h1>
            <div className="h-2 w-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 rounded animate-fade-in-left"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((testimonial, index) => (
            <div className="p-2 md:p-4 md:w-1/2 lg:w-1/3 w-full" key={index}>
              <div className="h-full bg-gray-100/50 p-8 rounded-lg border relative">
                <div>
                  <p className="max-w-[620px] min-h-[8rem] md:min-h-[10rem] text-justify md:text-lg leading-relaxed mb-6">
                    {testimonial.message}
                  </p>
                  <div className="inline-flex items-center">
                    {testimonial?.image && (
                      <Image
                        alt={testimonial.name}
                        src={testimonial.image}
                        width={48}
                        height={48}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover object-center"
                      />
                    )}
                    <span className={`flex-grow flex flex-col ${testimonial?.image && 'pl-4'}`}>
                      <span className="title-font font-semibold text-lg opacity-80 text-gray-900">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-100 font-medium">
                        {testimonial.position}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
