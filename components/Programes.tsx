import React from 'react';
import Image from 'next/image';

const Programes = () => {
  return (
    <div className="h-[70vh] relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Main container */}
      <div className="bg-white pb-8 relative">
        {/* Content container with phone illustration and text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          {/* Left side - Phone with people walking illustration */}
          <div className="relative w-150 h-150 flex-shrink-0">
            {/* <Image 
            className='pt-40'
              src="/mobile.svg" 
              alt="People walking on smartphone" 
              width={450}
              height={450}
              style={{ objectFit: "contain" }}
              priority
            /> */}
          </div>
          
          {/* Right side - Registration heading and text */}
          <div className="">
            {/* Registration heading with decorative elements */}
            <div className="flex items-center justify-center gap-2 mb-4">
              
              <h1 className="text-5xl font-bold text-red-600 font-leckerli">Programmes</h1>
             
            </div>
            
            {/* Registration text */}
            <p className="text-center pt-10   text-xl ">
            The Puri Literary Festival 2025 celebrates India's rich heritage through literature, art, and tradition. Set in the spiritual heart of Puri, it blends ancient wisdom with modern dialogue, reviving Odisha&apos;s cultural legacy through storytelling, folk arts, and indigenous crafts.
            </p>
            <div className="pt-2 flex items-center justify-center">
  <button className="text-white font-leckerli bg-red-600 hover:bg-red-700 text-xl py-2 px-4 rounded-2xl mt-4">
    View all programmes
  </button>
</div>

          </div>
        </div>
      </div>
      
      {/* Red bottom accent */}
      
    </div>
  );
};

export default Programes;

