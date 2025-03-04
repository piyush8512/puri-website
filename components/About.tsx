'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const About = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className='bg-[#D72327] h-[70vh]  relative flex flex-col items-center justify-center overflow-hidden'>
      {/* Male image - left side */}
      <div 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
          animate ? 'translate-x-10' : '-translate-x-full'
        }`}
      >
        <Image 
          src='/male.svg' 
          width={120} 
          height={120} 
          alt='male'
          className="max-w-full h-auto"
        />
      </div>
      
      {/* Center text content */}
      <div className='text-center max-w-4xl mx-auto px-6 z-10'>
        <h1 className='text-3xl md:text-4xl font-bold mb-12 text-white'>
          About The Festival
        </h1>
        <p className='text-white text-justify md:text-2xl'>
          The Puri Literary Festival 2025 celebrates the harmony of tradition and modernity, 
          inspired by the sacred symbolism of the Konark Sun Temple and Lord Jagannath&apos;s Ratha. 
          Rooted in Puri&apos;s rich spiritual and cultural legacy, the festival fosters global dialogue 
          through literature, art, and heritage. With grassroots outreach across Odisha, it aims to 
          inspire the youth, preserve traditions, and shape a visionary future for India&apos;s cultural 
          and intellectual growth.
        </p>
      </div>
      
      {/* Female image - right side */}
      <div 
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
          animate ? '-translate-x-10' : 'translate-x-full'
        }`}
      >
        <Image 
          src='/female.svg' 
          width={120} 
          height={120} 
          alt='female'
          className="max-w-full h-auto"
        />
      </div>
      <div className='w-full absolute bottom-0'>
        <Image src='/about-border.svg' width={400} height={300} className='w-full' alt='border'></Image>
      </div>
    </div>
  );
};

export default About;