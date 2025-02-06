import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../shared/icon";

const Footer = () => {
  const SOCIAL = [
    { icon: "linkedin", href: "https://www.linkedin.com/company/hackqbit", name: "LinkedIn" },
    { icon: "twitter", href: "https://twitter.com/hackqbit", name: "Twitter" },
    { icon: "instagram", href: "https://www.instagram.com/hackqbit/", name: "Instagram" },
  ];

  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <Link href="/">
            <Image src="/assets/branding/hackqbit-light.svg" width={150} height={50} alt="HackQBit" className="mb-4" />
          </Link>
          <p className="text-sm opacity-75">
            HackQBit is a global cybersecurity platform that brings together the brightest minds in the field for knowledge sharing, networking, and collaboration.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm opacity-80">General Inquiries: <a href="mailto:info@hackqbit.com" className="text-white font-medium">info@hackqbit.com</a></p>
          <p className="text-sm opacity-80">Sponsorship: <a href="mailto:sponsor@hackqbit.com" className="text-white font-medium">sponsor@hackqbit.com</a></p>
          <p className="text-sm opacity-80">CFP: <a href="mailto:cfp@hackqbit.com" className="text-white font-medium">cfp@hackqbit.com</a></p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {SOCIAL.map((item, index) => (
              <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                <Icon icon={item.icon} size={32} className="hover:text-yellow-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm opacity-75 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} HackQBit. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
