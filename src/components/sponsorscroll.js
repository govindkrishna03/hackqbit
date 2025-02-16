import React from "react";
import Image from "next/image";

const sponsors = [
  "cisco.png",
  "claranet.png",
  "cred.png",
  "crowdstrike.png",
  "fireeye.png",
  "google-cloud.png",
  "great-learning.png",
  "h&r-block.png",
  "hackthebox.png",
  "maltego.jpg",
  "pentesterlab.png",
  "salesforce.png",
  "schneider.png",
  "seagate.png",
  "secfence.png",
  "siemens.png",
  "sophos.png",
  "vmware.png",
  "zoho.png",
];

function SponsorCarousel() {
  return (
    <div className="w-full overflow-hidden space-x-5 py-5 bg-white h-[100px] mb=[20px] ">
        
      <div className="flex items-center whitespace-nowrap animate-scroll ">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="mx-5 min-w-[200px]">
            <Image
              src={`/assets/sponsors/${sponsor}`}  // ✅ Updated Path
              alt={sponsor.replace(/\.(png|jpg)/, "")}
              width={100}
              height={80}
              className="object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SponsorCarousel;
