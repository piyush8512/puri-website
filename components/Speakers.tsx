import React from "react";
import Image from "next/image";

function Speakers() {
  const speakerPositions = [
    { position: "absolute top-0 left-0", size: "w-40 md:w-52 lg:w-72" },
    { position: "absolute top-0 right-0", size: "w-40 md:w-52 lg:w-72" },
    { position: "absolute bottom-0 left-0", size: "w-40 md:w-52 lg:w-72" },
    { position: "absolute bottom-0 right-0", size: "w-40 md:w-52 lg:w-72" }
  ];

  return (
    <div className="speakers-bg bg-no-repeat bg-cover bg-center min-h-screen md:h-[150vh] flex flex-col md:flex-row justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      {/* Yellow Background Circle - Mobile Hidden */}
      <div className="hidden md:block h-64 w-64 lg:h-96 lg:w-96 bg-[#FFEC8C] rounded-full absolute top-4 left-1/6 -z-10">
      </div>  

      {/* Woman Illustration - Mobile Adjusted */}
      <Image
        src="/woman.svg"
        alt="woman illustration"
        width={250}
        height={250}
        className="hidden md:block absolute -top-6 left-1/6 z-50 w-60 lg:w-auto"
      />

      {/* Title Section */}
      <div className="text-center md:w-1/3 z-10 mb-12 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E90909] font-leckerli">
          Puri Lit Fest&apos;s <br className="md:hidden" />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Speakers</span>
        </h1>
      </div>

      {/* Speakers Grid */}
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-[70vh] lg:h-[80vh]">
        {speakerPositions.map((speaker, index) => (
          <div 
            key={index} 
            className={`${speaker.position} ${speaker.size} absolute transition-transform duration-300 hover:scale-105`}
          >
            <Image
              src="/speaker.svg"
              alt={`speaker ${index + 1}`}
              layout="responsive"
              width={282}
              height={282}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>


    </div>
  );
}

export default Speakers;