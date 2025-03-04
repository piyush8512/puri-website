import React from "react";
import Image from "next/image";

function Partners() {
  const partnerLogos = [
    "/partner1.svg",
    "/partner2.svg", 
    "/partner3.svg", 
    "/partner4.svg", 
    "/partner5.svg"
  ];

  return (
    <div className="flex flex-col min-h-screen md:min-h-[80vh] justify-center gap-10 md:gap-20 px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
        Partners
      </h1>
      
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex justify-evenly flex-wrap gap-8">
        {partnerLogos.map((logo, index) => (
          <div 
            key={index} 
            className="dashed-border p-2 md:p-4 lg:p-[10px] bg-center bg-no-repeat bg-cover transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={201}
              height={201}
              className="w-28 md:w-40 lg:w-[201px] h-auto"
            />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden grid grid-cols-2 gap-8 place-items-center">
        {partnerLogos.map((logo, index) => (
          <div 
            key={index} 
            className="dashed-border p-2 bg-center bg-no-repeat bg-cover transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={150}
              height={150}
              className="w-28 h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;