// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Desktop View */}
//       <div
//         ref={sectionRef}
//         className="bg-[#D72327] hidden md:flex min-h-[60vh] md:min-h-[80vh] relative flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pb-24 md:pb-0"
//       >
//         {/* Male image - left side */}
//         <div
//           className={`absolute hidden md:block left-20 top-1/3 transform transition-all duration-1000 ease-out ${
//             isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//           }`}
//         >
//           <Image
//             src="/greetingman2.svg"
//             width={100}
//             height={100}
//             alt="male illustration"
//             className="w-20 md:w-32 lg:w-40 h-auto max-w-full"
//           />
//         </div>

//         {/* Center text content */}
//         <div
//           className={`text-center w-full max-w-4xl mx-auto z-10 transition-all duration-1000 ease-out px-2 sm:px-6 lg:px-8 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//           }`}
//         >
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-leckerli font-bold mb-6 md:mb-18 text-white">
//             About The Festival
//           </h1>
//           <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl">
//             The Puri Literary Festival 2025 celebrates the harmony of tradition and modernity,
//             inspired by the sacred symbolism of the Konark Sun Temple and Lord Jagannath&apos;s
//             Ratha. Rooted in Puri&apos;s rich spiritual and cultural legacy, the festival fosters
//             global dialogue through literature, art, and heritage. With grassroots outreach across
//             Odisha, it aims to inspire the youth, preserve traditions, and shape a visionary future
//             for India&apos;s cultural and intellectual growth.
//           </p>
//         </div>

//         {/* Female image - right side */}
//         <div
//           className={`absolute hidden md:block right-20 top-1/3 transform transition-all duration-1000 ease-out ${
//             isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//           }`}
//         >
//           <Image
//             src="/greetingwoman.svg"
//             width={100}
//             height={100}
//             alt="female illustration"
//             className="w-20 md:w-32 lg:w-40 h-auto max-w-full"
//           />
//         </div>

//         {/* Bottom border image */}
//         <div className="absolute bottom-0 left-0 w-full hidden md:block">
//           <Image src="/about-border.svg" width={400} height={300} className="w-full" alt="border decoration" />
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="relative block md:hidden">
//         {/* Text Content Positioned Over the Image */}
//         <div className="absolute -top-14 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10 px-2">
//           <h1 className="text-2xl font-leckerli font-bold mb-4 text-white">About The Festival</h1>
//           <p className="text-white text-[12px] text-center">
//             The Puri Literary Festival 2025 celebrates the harmony of tradition and modernity,
//             inspired by the sacred symbolism of the Konark Sun Temple and Lord Jagannath&apos;s
//             Ratha. Rooted in Puri&apos;s rich spiritual and cultural legacy, the festival fosters
//             global dialogue through literature, art, and heritage. With grassroots outreach across
//             Odisha, it aims to inspire the youth, preserve traditions, and shape a visionary future
//             for India&apos;s cultural and intellectual growth.
//           </p>
//         </div>

//         {/* Background Image */}
//         <div className="relative">
//           <Image src="/phoneaboutbg.png" width={400} height={300} className="w-full h-auto object-cover" alt="border decoration" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mobileSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mobileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (mobileSectionRef.current)
      mobileObserver.observe(mobileSectionRef.current);

    return () => mobileObserver.disconnect();
  }, []);

  return (
    <>
      {/* Desktop View */}
      <motion.div
        ref={sectionRef}
        className="bg-[#D72327] hidden md:flex min-h-[60vh] md:min-h-[80vh] relative flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pb-24 md:pb-0"
      >
        {/* Male image - left side */}
        <motion.div
          className={`absolute hidden md:block left-20 top-1/3 transform transition-all duration-1000 ease-out`}
          initial={{ opacity: 0, x: -50 }}
          animate={
            isVisible ? { opacity: 1, x: 0, transition: { duration: 1.2 } } : {}
          }
        >
          <Image
            src="/greetingman2.svg"
            width={100}
            height={100}
            alt="male illustration"
            className="w-20 md:w-32 lg:w-40 h-auto max-w-full"
          />
        </motion.div>

        {/* Center text content */}
        <motion.div
          className="text-center w-full max-w-4xl mx-auto z-10 px-2 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isVisible ? { opacity: 1, y: 0, transition: { duration: 1.2 } } : {}
          }
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-leckerli font-bold mb-6 md:mb-18 text-white">
            About The Festival
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl">
            The Puri Literary Festival 2025 celebrates the harmony of tradition
            and modernity, inspired by the sacred symbolism of the Konark Sun
            Temple and Lord Jagannath&apos;s Ratha. Rooted in Puri&apos;s rich
            spiritual and cultural legacy, the festival fosters global dialogue
            through literature, art, and heritage. With grassroots outreach
            across Odisha, it aims to inspire the youth, preserve traditions,
            and shape a visionary future for India&apos;s cultural and
            intellectual growth.
          </p>
        </motion.div>

        {/* Female image - right side */}
        <motion.div
          className={`absolute hidden md:block right-20 top-1/3 transform transition-all duration-1000 ease-out`}
          initial={{ opacity: 0, x: 50 }}
          animate={
            isVisible ? { opacity: 1, x: 0, transition: { duration: 1.2 } } : {}
          }
        >
          <Image
            src="/greetingwoman.svg"
            width={100}
            height={100}
            alt="female illustration"
            className="w-20 md:w-32 lg:w-40 h-auto max-w-full"
          />
        </motion.div>

        {/* Bottom border image */}
        <motion.div
          className="absolute bottom-0 left-0 w-full hidden md:block"
          initial={{ opacity: 0 }}
          animate={
            isVisible ? { opacity: 1, transition: { duration: 1.5 } } : {}
          }
        >
          <Image
            src="/about-border.svg"
            width={400}
            height={300}
            className="w-full"
            alt="border decoration"
          />
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        ref={mobileSectionRef}
        className="relative block md:hidden "
        initial={{ opacity: 0 }}
        animate={
          isMobileVisible ? { opacity: 1, transition: { duration: 1.2 } } : {}
        }
      >
        <div className="w-full bg-[#D72327] md:hidden  top-0 h-20"></div>
        {/* Text Content Positioned Over the Image */}
        <motion.div
          className="absolute -top-14 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isMobileVisible
              ? { opacity: 1, y: 0, transition: { duration: 1.2 } }
              : {}
          }
        >
          <h1 className="text-2xl font-leckerli font-bold mb-4 text-white">
            About The Festival
          </h1>
          <p className="text-white text-[12px] text-center">
            The Puri Literary Festival 2025 celebrates the harmony of tradition
            and modernity, inspired by the sacred symbolism of the Konark Sun
            Temple and Lord Jagannath&apos;s Ratha. Rooted in Puri&apos;s rich
            spiritual and cultural legacy, the festival fosters global dialogue
            through literature, art, and heritage. With grassroots outreach
            across Odisha, it aims to inspire the youth, preserve traditions,
            and shape a visionary future for India&apos;s cultural and
            intellectual growth.
          </p>
        </motion.div>

        {/* Background Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={
            isMobileVisible ? { opacity: 1, transition: { duration: 1.5 } } : {}
          }
        >
          <Image
            src="/phoneaboutbg.png"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
            alt="border decoration"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
