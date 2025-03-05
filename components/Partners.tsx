import React from "react";
import Image from "next/image";

function Partners() {
  const partnerLogos = [
    "/Government_of_India_logo.svg",
    "/logo2.svg",
    "/Ministry_of_Culture_India.svg",
    "/logo1.svg",
    "/IGNCA.jpg",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen md:min-h-[70vh] justify-center gap-10 md:gap-20 px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
        Partners
      </h1>

      {/* Desktop/Tablet & Mobile Layout */}
      <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 w-full">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4"
          >
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={150}
              height={150}
              className="w-28 md:w-40 lg:w-[150px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
