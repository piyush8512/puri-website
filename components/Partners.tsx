import React from "react";
import Image from "next/image";

function Partners() {
  const partnerLogos = [
    "/Government_of_India_logo.svg",
    "/logo2.svg",
    "/Ministry_of_Culture_India.svg",
    "/logo1.svg",
    "/IGNCA.svg",
  ];

  return (
    <div className="flex  flex-col items-center min-h-[30vh] md:min-h-[70vh] justify-center gap-10 md:gap-15 px-4 sm:px-6 lg:px-8 py-12">
      <h1 className=" md:block hiddentext-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
        Partners
      </h1>

      {/* Responsive Grid Layout for Logos */}
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-2 sm:gap-8 md:gap-12 lg:gap-16 place-items-center w-full max-w-5xl">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-2 sm:p-4"
          >
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={150}
              height={150}
              className="w-20 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;