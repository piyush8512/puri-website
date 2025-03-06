import React from "react";
import Image from "next/image";

function Speakers() {
  const speakerPositions = [
    { position: "absolute top-0 left-0", size: "w-25 md:w-40 lg:w-56" },
    { position: "absolute top-0 right-0", size: "w-25 md:w-40 lg:w-56" },
    { position: "absolute bottom-0 left-0", size: "w-25 md:w-40 lg:w-56" },
    { position: "absolute bottom-0 right-0", size: "w-25 md:w-40 lg:w-56" },
  ];
  const speakers = [
    {
      name: "Sh. Jagdeep Dhankar",
      position: "Vice President of India",
      image: "/jagdeep.svg",
    },
    {
      name: "Sh. Hari Babu Kambhampati",
      position: "Governor of Odisha",
      image: "/Sh. Hari Babu Kambhampati.svg",
    },
    {
      name: "Sh. Dharmendra Pradhan",
      position: "Union Minister for Education",
      image: "/Sh. Dharmendra Pradhan.svg",
    },
    {
      name: "Sh. Gajendra Singh Shekhawat",
      position: "Ministry of Culture",
      image: "/Sh. Gajendra Singh Shekhawat.svg",
    },
  ];

  return (
    <div className="speakers-bg bg-no-repeat bg-cover bg-center min-h-[110vh] md:h-[140vh] flex flex-col md:flex-row justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      {/* Yellow Background Circle - Mobile Hidden */}
      <div className="hidden md:block h-48 w-48 lg:h-80 lg:w-80 bg-[#FFEC8C] rounded-full absolute top-4 left-1/6 -z-10"></div>
      <div className="md:hidden block h-38 w-30 lg:h-80 lg:w-80 bg-[#FFEC8C] rounded-full absolute top-14 left-1/6 -z-10"></div>
      
      {/* Woman Illustration - Now Visible on Mobile */}
      <Image
        src="/woman.svg"
        alt="woman illustration"
        width={200}
        height={200}
        className="absolute top-12 md:-top-4 left-1/6 z-50 w-38 lg:w-80 block md:block"
      />
      
      {/* Title Section */}
      <div className="text-center md:w-1/3 z-10 md:mt-0 mt-34 mb-12 md:mb-0">
        <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl text-[#E90909] font-leckerli">
          Puri Lit Fest&apos;s <br className="md:hidden" />
          <span className="text-lg sm:text-5xl md:text-5xl lg:text-5xl"><br className="hidden md:block"/>Speakers</span>
        </h1>
      </div>
      
      {/* Mobile Specific Layout */}
      <div className="block md:hidden w-full max-w-xs mx-auto relative h-[80vh] mt-8">
        {/* Speakers Layout for Mobile */}
        <div className="grid grid-cols-2 gap-4 absolute inset-0">
          {speakers.map((speaker, index) => (
            <div key={`mobile-speaker-${index}`} className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-sky-100 to-green-100 rounded-lg overflow-hidden ">
                <Image 
                  src={speaker.image} 
                  alt={speaker.name.toLowerCase()} 
                  width={100}
                  height={100}
                  className="w-lg h-auto"
                />
              </div>
              <div className="text-center">
                <h1 className="text-white text-sm font-medium">{speaker.name}</h1>
                <p className="text-white text-xs">{speaker.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Existing Desktop Layout */}
      {/* Desktop Layout */}
      <div className="hidden md:block relative w-2xl h-[60vh] lg:h-[80vh]">
          {speakers.map((speaker, index) => (
            <div
              key={`desktop-speaker-${index}`}
              className={`${speakerPositions[index].position} ${speakerPositions[index]} w-56 transition-transform duration-300 hover:scale-105`}
            >
              <div className="bg-white overflow-hidden rounded-xl p-2">
                <Image
                  src={speaker.image}
                  alt={speaker.name.toLowerCase()}
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-xl "
                />
                <div className="text-center">
                  <h3 className="text-blue-900 font-semibold text-sm">{speaker.name}</h3>
                  <p className="text-blue-700 text-xs">{speaker.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Speakers;