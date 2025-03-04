import React from 'react';
import Image from 'next/image';

const Registration = () => {
  return (
    <div className="h-screen relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Main container */}
      <div className="bg-white pb-8 relative">
        {/* Content container with phone illustration and text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          {/* Left side - Phone with people walking illustration */}
          <div className="relative w-150 h-150 flex-shrink-0">
            <Image 
            className='pt-40'
              src="/mobile.svg" 
              alt="People walking on smartphone" 
              width={650}
              height={650}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          
          {/* Right side - Registration heading and text */}
          <div className="">
            {/* Registration heading with decorative elements */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image src="/shank.svg" alt="Decorative element" width={200} height={200} />
              <h1 className="text-6xl font-bold text-red-600 font-script">Registration</h1>
              <Image src="/shank.svg" alt="Decorative element" width={200} height={200} className='scale-x-[-1]'/>
            </div>
            
            {/* Registration text */}
            <p className="text-center   text-2xl ">
              The 2025 edition of the Puri Literary Festival will bring together literary 
              icons, cultural historians, and thought leaders for an inspiring 
              celebration of India&apos;s heritage and future. Register now to be part of this 
              immersive experience from April 18-20 in Puri, Odisha, featuring 
              dynamic sessions, cultural performances, heritage walks, and 
              interactive workshops that bridge tradition with contemporary 
              discourse.
            </p>
          </div>
        </div>
      </div>
      
      {/* Red bottom accent */}
      
    </div>
  );
};

export default Registration;