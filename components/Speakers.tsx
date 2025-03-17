import React from "react";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

function Speakers() {
  const speakerPositions = [
    { position: "absolute bottom-70 left-0", size: "w-25 md:w-20 " },
    { position: "absolute top-2 right-0", size: "w-25 md:w-20" },
    { position: "absolute bottom-2 left-0", size: "w-25 md:w-20 " },
    { position: "absolute top-70 right-0", size: "w-25 md:w-20 " },
  ];
  const speakers = [
    {
      name: "Sh. Gajendra Singh Shekhawat",
      position: "Ministry of Culture",
      image: "/Sh. Gajendra Singh Shekhawat.svg",
    },
    {
      name: "Sh. Jagdeep Dhankar",
      position: "Vice President of India",
      image: "/jagdeep.svg",
    },
    {
      name: "Sh. Dharmendra Pradhan",
      position: "Union Minister for Education",
      image: "/Sh. Dharmendra Pradhan.svg",
    },
    
    {
      name: "Sh. Hari Babu Kambhampati",
      position: "Governor of Odisha",
      image: "/Sh. Hari Babu Kambhampati.svg",
    },
    
   
  ];

  return (
    <div className=" md:flex hidden speaker-bg bg-no-repeat bg-cover bg-top min-h-[120vh] md:h-[150vh]  flex-col md:flex-row justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      {/* Yellow Background Circle - Mobile Hidden */}
      <div className="hidden md:block h-48 w-48 lg:h-80 lg:w-80 bg-[#FFEC8C] rounded-full absolute top-4 left-1/6 -z-10"></div>
      <div className="md:hidden block h-30 w-30 lg:h-80 lg:w-80 bg-[#FFEC8C] rounded-full absolute top-22 left-1/6 -z-10"></div>

      {/* Woman Illustration - Now Visible on Mobile */}
      <Image
        src="/woman.svg"
        alt="woman illustration"
        width={200}
        height={200}
        className="absolute top-16 md:-top-4 left-1/6 z-50 w-38 lg:w-80 block md:block"
      />
      
      {/* Title Section */}
      <div className="text-center md:w-1/3 z-10 md:mt-0 mt-34 mb-10 md:mb-0">
        <h1 className="text-xl sm:text-4xl md:p-0 pt-10 md:text-5xl lg:text-5xl text-[#E90909] font-leckerli">
          Puri Lit Fest&apos;s<br/>Speakers
        </h1>
      </div>
      
      {/* Mobile Specific Layout */}
      <div className="block md:hidden w-full max-w-xs mx-auto relative h-[80vh] md:mt-8 mt-0 mb-5">
        {/* Speakers Layout for Mobile */}
        <div className="grid grid-cols-2 gap-4 absolute inset-0 -space-y-28 ">
          {speakers.map((speaker, index) => (
            <div key={`mobile-speaker-${index}`} className="flex flex-col items-center">
              <div className="  overflow-hidden ">
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
      <div className="hidden md:block relative w-lg h-[60vh] lg:h-[80vh] mx-20">
          {speakers.map((speaker, index) => (
            <div
              key={`desktop-speaker-${index}`}
              className={`${speakerPositions[index].position} ${speakerPositions[index]} w-2/5 transition-transform duration-300 hover:scale-105`}
            >
              <div className=" overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name.toLowerCase()}
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-xl "
                />
                <div className="text-center">
                  <h3 className="text-[#FFFCF5] font-semibold text-sm">{speaker.name}</h3>
                  <p className="text-[#FFFCF5] text-xs">{speaker.position}</p>
                </div>
                
              </div>
              
            </div>
            
          ))}
          

          
        </div>
        <IoIosArrowDropright className="absolute top-1/2  right-19 transform translate-x-2 -translate-y-1/2 text-red-500 text-6xl" />
    </div>
  );
}

export default Speakers;