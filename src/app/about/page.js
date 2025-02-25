import React from 'react';
import { Globe2, Shield, Target, Users2, Cpu, Code2, Trophy, BookOpen, Rocket } from 'lucide-react';
import Navbar from "../navbar";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-gray-700 group">
      <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function AboutUs() {
  const features = [
    { icon: Globe2, title: "Global Community", description: "Connect with cybersecurity enthusiasts from around the world." },
    { icon: Shield, title: "Expert Training", description: "Learn from industry leaders through intensive workshops." },
    { icon: Target, title: "Hands-on Experience", description: "Participate in challenging CTF competitions and interactive sessions." },
    { icon: Users2, title: "Networking", description: "Build valuable connections with peers, mentors, and professionals." },
    { icon: Cpu, title: "Innovation Hub", description: "Experience cutting-edge cybersecurity technologies and methodologies." },
    { icon: Code2, title: "Practical Learning", description: "Engage in real-world scenarios and hands-on exercises." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 md:px-12">
      <Navbar />
      
      {/* Header Section */}
      <div className="text-center my-12">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text drop-shadow-lg">
          ABOUT HACKQBIT
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-600 rounded mx-auto my-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A global cybersecurity platform uniting the brightest minds for knowledge sharing, networking, and collaboration.
        </p>
      </div>
      
      {/* About Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            HackQBit presents students an opportunity to learn, challenge their skills, and connect with like-minded people through Capture The Flag (CTF) competitions, hands-on training, and interactive villages.
          </p>
          <div className="flex items-center space-x-4">
            <Trophy className="w-6 h-6 text-purple-400" />
            <span className="text-gray-300">Join us in shaping the future of cybersecurity.</span>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Amrita Vishwa Vidyapeetham</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            A renowned institution recognized for its commitment to academic excellence and impactful research. Amrita is accredited A++ by NAAC and ranks among the best research institutions in India.
          </p>
          <div className="flex items-center space-x-4">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <span className="text-gray-300">Home to India's first and number one CTF team, bi0s.</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-12 border border-gray-700">
        <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Be part of a growing community of cybersecurity enthusiasts and professionals. Together, we can make the digital world a safer place.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
