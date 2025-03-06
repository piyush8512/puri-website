import React from 'react';
import Image from 'next/image';

const Programes = () => {
  return (
    <div className="h-auto md:h-[70vh] relative w-full max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Main container */}
      <div className="bg-white pb-8 relative">
        {/* Content container with phone illustration and text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left side - Phone with people walking illustration */}
          <div className="relative w-full md:w-150 h-auto md:h-150 flex-shrink-0">
            <Image
              className="pt-40 "
              src="/mandirdancers.png"
              alt="People walking on smartphone"
              width={450}
              height={450}
              style={{ objectFit: "contain" }}
              priority
            />
           
          </div>
          
          {/* Right side - Registration heading and text */}
          <div className="w-full md:w-auto text-center md:text-left">
            {/* Registration heading with decorative elements */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 font-leckerli">
                Programmes
              </h1>
            </div>
            
            {/* Registration text */}
            <p className="text-center sm:text-lg md:text-xl pt-6 md:pt-10 px-4 md:px-0">
              The Puri Literary Festival 2025 celebrates India's rich heritage through literature, art, and tradition. Set in the spiritual heart of Puri, it blends ancient wisdom with modern dialogue, reviving Odisha's cultural legacy through storytelling, folk arts, and indigenous crafts.
            </p>
            
            <div className="pt-2 flex items-center justify-center md:justify-center mt-6 md:mt-4">
              <button className="text-white font-leckerli bg-red-600 hover:bg-red-700 text-base sm:text-lg md:text-xl py-2 px-4 rounded-2xl">
                View all programmes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programes;