import React from 'react';
import { Building2, Globe2, Users2, Network, Heart, Package, Award, LightbulbIcon, GraduationCap } from 'lucide-react';
import Navbar from "../navbar";
function SponsorCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-gray-700">
      <Icon className="w-8 h-8 text-purple-400 mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function Sponsorus() {
  const benefits = [
    {
      icon: Building2,
      title: "Unprecedented Exposure",
      description: "With an expected 1000 participants from diverse backgrounds attending, your brand will gain significant visibility among industry leaders, professionals, students, and enthusiasts in the field of cybersecurity."
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "HackQBit is an international event attracting participants from around the world. Sponsoring this event will give your brand global exposure and the opportunity to connect with an international audience."
    },
    {
      icon: Users2,
      title: "Talent Acquisition",
      description: "With a plethora of competitions and training sessions, HackQBit will be a gathering point for top talents in the field of cybersecurity. Sponsoring this event will provide you with the unique opportunity to identify and recruit promising individuals."
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "The event will provide ample opportunities for networking with industry leaders, government officials, and cybersecurity professionals. This can lead to potential collaborations and partnerships."
    },
    {
      icon: Heart,
      title: "Community Engagement",
      description: "Sponsoring HackQBit allows your company to engage with the cybersecurity community in a meaningful way. This can help you build goodwill, enhance your company's reputation, and foster stronger relationships with key stakeholders."
    },
    {
      icon: Package,
      title: "Customized Sponsorship Packages",
      description: "We offer a range of sponsorship packages, each providing different levels of visibility and benefits. We are also open to customizing these packages to meet your specific needs and objectives."
    },
    {
      icon: Award,
      title: "Brand Alignment",
      description: "Aligning your brand with HackQBit demonstrates your commitment to cybersecurity, a field of increasing importance in today's digital world. This can enhance your brand image and reputation."
    },
    {
      icon: LightbulbIcon,
      title: "Thought Leadership",
      description: "By sponsoring HackQBit, your organization will be seen as a thought leader in the cybersecurity space, committed to supporting the growth and development of the industry."
    },
    {
      icon: GraduationCap,
      title: "Supporting Education and Research",
      description: "Your sponsorship will support Amrita Vishwa Vidyapeetham's mission to make India self-reliant in cybersecurity, fostering education, research, and innovation in the field."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
  <div className="p-5">
    <Navbar />
  </div>

  <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
    {/* Title Section */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Side - Title */}
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text drop-shadow-lg ">
        Why Sponsor?
      </h1>
      

      {/* Right Side - Description */}
      <div className="max-w-2xl">
    
        <p className="text-3xl text-gray-300 leading-relaxed">
          Join us in shaping the future of cybersecurity by sponsoring one of the most prestigious hackathons in the field.
        </p>
      </div>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
      {benefits.map((benefit, index) => (
        <SponsorCard
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>

    {/* CTA Button */}
    <div className="mt-20 text-center">
      <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
        Become a Sponsor
      </button>
    </div>
  </div>
</div>

  
  );
}

export default Sponsorus;
