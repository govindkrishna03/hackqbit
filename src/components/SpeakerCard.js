import React from "react";

const SpeakerCard = ({ speaker }) => {
  return (
    <div
      className="group relative bg-white flex flex-col border border-gray-200 shadow-lg 
      transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl overflow-hidden text-center justify-center"
    >
      {/* Speaker Image */}
      <div className="w-full overflow-hidden">
        {speaker?.image && (
          <div
            style={{
              backgroundImage: `url(${speaker.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[15rem] md:h-[13rem] lg:h-[14rem] transition-opacity duration-300 group-hover:opacity-90"
            title={speaker?.name}
          />
        )}
      </div>

      {/* Speaker Details */}
      <div className="w-full p-4 bg-white">
        <h3 className="font-semibold text-lg md:text-sm text-gray-900 group-hover:text-primary transition-colors duration-300">
          {speaker?.name}
        </h3>
        {speaker?.title && (
          <p className="text-gray-600 text-sm md:text-base mt-1">{speaker.title}</p>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;
