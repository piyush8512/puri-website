// import React from "react";
// import Image from "next/image";

// function Partners() {
//   const partnerLogos = [
//     "/Government_of_India_logo.svg",
//     "/logo2.svg",
//     "/Ministry_of_Culture_India.svg",
//     "/logo1.svg",
//     "/IGNCA.svg",
//   ];

//   return (
//     <div className="flex  flex-col items-center min-h-[30vh] md:min-h-[70vh] justify-center gap-10 md:gap-15 px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className=" md:block hiddentext-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
//         Partners
//       </h1>

//       {/* Responsive Grid Layout for Logos */}
//       <div className="grid grid-cols-5 sm:grid-cols-5 gap-2 sm:gap-8 md:gap-12 lg:gap-16 place-items-center w-full max-w-5xl">
//         {partnerLogos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex justify-center items-center p-2 sm:p-4"
//           >
//             <Image
//               src={logo}
//               alt={`Partner logo ${index + 1}`}
//               width={150}
//               height={150}
//               className="w-20 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Partners;

'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Partners: React.FC = () => {
  const partnerLogos: string[] = [
    "/Government_of_India_logo.svg",
    "/logo2.svg",
    "/Ministry_of_Culture_India.svg",
    "/logo1.svg",
    "/IGNCA.svg",
    "/Seal_of_Odisha.svg",
    "/brhat.jpg",
    "/isdm.jpg",
    "/jindalUni.jpg",
    "/argus.jpg",
    "/prameya.jpg",
    "/celsius.png"

  ];
  
  // Create refs for the animation container
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    // Clone logos to create a seamless loop
    const container = containerRef.current;
    if (!container) return;
    
    // Set up the animation
    const animateLogos = (): void => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
      requestAnimationFrame(animateLogos);
    };
    
    // Start the animation
    const animationId = requestAnimationFrame(animateLogos);
    
    // Clean up animation on unmount
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-[30vh] md:min-h-[70vh] justify-center gap-10 md:gap-15 px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="md:block text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
      <Link href="./partners">
        Partners
        </Link>
      </h1>
      
      {/* Scrollable container for infinite loop animation */}
      <div className="w-full max-w-7xl overflow-hidden">
        <div 
          ref={containerRef}
          className="flex whitespace-nowrap overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Original set of logos */}
          {partnerLogos.map((logo: string, index: number) => (
            <div
              key={`logo-1-${index}`}
              className="inline-flex justify-center items-center p-2 sm:p-3 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px]"
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={80}
                height={80}
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
              />
            </div>
          ))}
          
          {/* Duplicated set of logos to create seamless loop */}
          {partnerLogos.map((logo: string, index: number) => (
            <div
              key={`logo-2-${index}`}
              className="inline-flex justify-center items-center p-2 sm:p-3 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px]"
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={80}
                height={80}
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
