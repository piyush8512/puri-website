// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Partners: React.FC = () => {
//   const partnerLogos = [
//     { src: "/Government_of_India_logo.svg", width: 150, height: 100 },
//     { src: "/logo2.svg", width: 120, height: 80 },
//     { src: "/Ministry_of_Culture_India.svg", width: 130, height: 85 },
//     { src: "/logo1.svg", width: 100, height: 70 },
//     { src: "/IGNCA.svg", width: 140, height: 90 },
//     // { src: "/Seal_of_Odisha.svg", width: 110, height: 85 },
//     { src: "/brhat.jpg", width: 170, height: 100 },
//     { src: "/isdm.jpg", width: 120, height: 85 },
//     { src: "/jindalUni.jpg", width: 180, height: 80 },
//     { src: "/argus.jpg", width: 90, height: 75 },
//     { src: "/prameya.jpg", width: 145, height: 90 },
//     { src: "/celsius.png", width: 140, height: 85 },
//   ];

//   // Create refs for the animation container
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const animateLogos = (): void => {
//       if (container.scrollLeft >= container.scrollWidth / 2) {
//         container.scrollLeft = 0;
//       } else {
//         container.scrollLeft += 1;
//       }
//       requestAnimationFrame(animateLogos);
//     };

//     const animationId = requestAnimationFrame(animateLogos);

//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <div className="flex flex-col items-center min-h-[30vh] md:min-h-[70vh] justify-center gap-10 md:gap-15 px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="md:block text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
//         <Link href="./partners">Partners</Link>
//       </h1>

//       {/* Scrollable container for infinite loop animation */}
//       <div className="w-full max-w-7xl overflow-hidden">
//         <div
//           ref={containerRef}
//           className="flex whitespace-nowrap overflow-x-hidden gap-6"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           {/* Original set of logos */}
//           {partnerLogos.map((logo, index) => (
//             <div
//               key={`logo-1-${index}`}
//               className="inline-flex justify-center items-center p-2 sm:p-3"
//               style={{ minWidth: logo.width }}
//             >
//               <Image
//                 src={logo.src}
//                 alt={`Partner logo ${index + 1}`}
//                 width={logo.width}
//                 height={logo.height}
//                 className="h-auto object-contain"
//               />
//             </div>
//           ))}

//           {/* Duplicated set of logos for seamless loop */}
//           {partnerLogos.map((logo, index) => (
//             <div
//               key={`logo-2-${index}`}
//               className="inline-flex justify-center items-center p-2 sm:p-3"
//               style={{ minWidth: logo.width }}
//             >
//               <Image
//                 src={logo.src}
//                 alt={`Partner logo ${index + 1}`}
//                 width={logo.width}
//                 height={logo.height}
//                 className="h-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const partnerLogos = [
  { src: "/Government_of_India_logo.svg", width: 150, height: 100 },
  { src: "/logo2.svg", width: 100, height: 60 },
  { src: "/Ministry_of_Culture_India.svg", width: 130, height: 85 },
  { src: "/logo1.svg", width: 100, height: 70 },
  { src: "/IGNCA.svg", width: 140, height: 90 },
  { src: "/brhat.jpg", width: 170, height: 100 },
  { src: "/isdm.jpg", width: 120, height: 85 },
  { src: "/jindalUni.jpg", width: 180, height: 80 },
  { src: "/argus.jpg", width: 90, height: 75 },
  { src: "/prameya.jpg", width: 145, height: 90 },
  { src: "/celsius.png", width: 140, height: 85 },
];

const Partners: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
      className="flex flex-col items-center min-h-[30vh] md:min-h-[70vh] justify-center gap-10 md:gap-15 px-4 sm:px-6 lg:px-8 py-12"
    >
      <h1 className="md:block text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-leckerli text-[#FF0707]">
        <Link href="./partners">Partners</Link>
      </h1>

      {/* Marquee Effect */}
      <div className="w-full max-w-7xl overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="inline-flex justify-center items-center px-6"
              style={{ minWidth: logo.width }}
            >
              <Image
                src={logo.src}
                alt={`Partner logo ${index + 1}`}
                width={logo.width}
                height={logo.height}
                className="h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default Partners;
